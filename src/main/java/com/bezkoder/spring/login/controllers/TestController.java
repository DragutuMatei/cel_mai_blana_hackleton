package com.bezkoder.spring.login.controllers;

import com.bezkoder.spring.login.models.*;
import com.bezkoder.spring.login.payload.request.*;
import com.bezkoder.spring.login.repository.AplicatiiRepository;
import com.bezkoder.spring.login.repository.DosarRepository;
import com.bezkoder.spring.login.repository.SpecialitatiRepository;
import com.bezkoder.spring.login.repository.UserRepository;
import com.bezkoder.spring.login.security.jwt.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

@CrossOrigin(allowCredentials = "true",
        origins = "http://localhost:3000",
        allowedHeaders = "*",
        maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    AplicatiiRepository aplicatiiRepository;

    @Autowired
    DosarRepository dosarRepository;

    @Autowired
    SpecialitatiRepository specialitatiRepository;

    @GetMapping("/all")
    public String allAccess() {
        return "Public Content.";
    }

    @GetMapping("/user")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public String userAccess() {
        return "User Content.";
    }

    @GetMapping("/isLogged")
    public Boolean isUserLoggedIn() {
        return SecurityContextHolder.getContext().getAuthentication().getPrincipal() instanceof UserDetails;
    }

    @PostMapping("/getLoggedUserInfo")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public Optional<User> getLoggedUserInfo(@RequestBody GetUser token) {
        System.out.println(token.getToken());
        String username = jwtUtils.getUserNameFromJwtToken(token.getToken());
        Optional<User> user = userRepository.findByUsername(username);

        return user;
    }

    @GetMapping("/userInfo")
    public Optional<User> getUserInfo() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (principal instanceof UserDetails) {
            UserDetails user = (UserDetails) principal;
//            return user;
            Optional<User> response = userRepository.findByUsername(user.getUsername());

            return response;
        } else {
            String username = principal.toString();
            return null;
        }
    }

    @GetMapping("/getUserAplAsUni")
    @PreAuthorize("hasRole('ROLE_MODERATOR')")
    public ResponseEntity<List<User>> getUsersAllInfo() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (principal instanceof UserDetails) {
            UserDetails userDetails = (UserDetails) principal;
            Optional<User> response = userRepository.findByUsername(userDetails.getUsername());
            User user = response.orElse(null);
            if (user == null)
                return ResponseEntity.ok(null);

            List<Aplicatii> aplicantii = new ArrayList<>();

            userRepository.findAll().forEach((u) -> {
                List<Aplicatii> appList = u.getAplicatii().stream().filter((ap) -> ap.getId_facultate() == user.getId()).collect(Collectors.toList());
                aplicantii.addAll(appList);
            });

            List<User> applicantiUsers = userRepository.findAll().stream().filter((u) ->
                    !Collections.disjoint(u.getAplicatii(), aplicantii)
            ).collect(Collectors.toList());

            return ResponseEntity.ok(applicantiUsers);
        } else {
            String username = principal.toString();
            return ResponseEntity.ok(null);
        }
    }

    @GetMapping("/getAllAplications")
    public ResponseEntity<Set<Aplicatii>> getAllAplications() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (principal instanceof UserDetails) {
            UserDetails userDetails = (UserDetails) principal;
            Optional<User> response = userRepository.findByUsername(userDetails.getUsername());
            User user = response.orElse(null);
            if (user == null)
                return ResponseEntity.ok(null);

            return ResponseEntity.ok(user.getAplicatii());
        } else {
            String username = principal.toString();
            return ResponseEntity.ok(null);
        }
    }

    @PostMapping("/filter")
    public ResponseEntity<List<User>> filterFacultati(@RequestBody FilterRequest filterRequest) {
        List<User> users = userRepository.findAll().stream().filter(user -> user.getLocuri() > 0).collect(Collectors.toList());
        List<User> finalUsers = new ArrayList<>();

        users.forEach(user -> {
            if (filterRequest.getMedie() != 0 && filterRequest.getMedie() >= user.getMedie()) {
                if (!finalUsers.contains(user)) {
                    finalUsers.add(user);
                }
            }

            if (!filterRequest.getOras().equals("") && filterRequest.getOras().equals(user.getOras())) {
                if (!finalUsers.contains(user)) {
                    finalUsers.add(user);
                }
            }

            if(filterRequest.getTaxa() != 0 && filterRequest.getTaxa() >= user.getTaxa()){
                if(!finalUsers.contains(user)){
                    finalUsers.add(user);
                }
            }
        });

        return ResponseEntity.ok(finalUsers);
    }

    @PostMapping("/getById")
    public ResponseEntity<User> getFacById(@RequestBody Facultate_cu_long_id_Request facultate_cu_long_id_request) {
        System.out.println(facultate_cu_long_id_request.getId());
        User user = userRepository.findById(facultate_cu_long_id_request.getId())
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with id: " + facultate_cu_long_id_request.getId()));
        System.out.println(user);
        return ResponseEntity.ok(user);
    }

    @PostMapping("/acceptAplicant")
    public ResponseEntity<Boolean> acceptAplicant(@RequestBody UpdateAplicatiiRequest updateAplicatiiRequest){
        Aplicatii aplicatii = aplicatiiRepository.getById(updateAplicatiiRequest.getId());
        if(updateAplicatiiRequest.isAccept()) {
            aplicatii.setRezultat("Acceptat");
        }else{
            aplicatii.setRezultat("Respins");
        }

        aplicatiiRepository.save(aplicatii);

        return ResponseEntity.ok(true);

    }


    @GetMapping("/getSpecialitati")
    public ResponseEntity<List<Specialitati>> getSpec() {
        List<Specialitati> specialitati = specialitatiRepository.findAll();

        specialitati.forEach((specialitate) -> {
            System.out.println(specialitate.getSpec());
        });

        return ResponseEntity.ok().body(specialitati);
    }

    @PostMapping("/updateUser")
    public ResponseEntity<User> updateUser(@RequestBody UpdateUserRequest updateUserRequest) {
        System.out.println(updateUserRequest);
        User user = userRepository.findById(updateUserRequest.getId())
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with id: " + updateUserRequest.getId()));
        if (!Objects.equals(user.getEmail(), updateUserRequest.getEmail()) && !updateUserRequest.getEmail().equals("")) {
            System.out.println("asd2");
            user.setEmail(updateUserRequest.getEmail());
        }
        if (!Objects.equals(user.getProfil(), updateUserRequest.getProfil()) && !updateUserRequest.getProfil().equals("")) {
            System.out.println("asd2");
            user.setProfil(updateUserRequest.getProfil());
        }
        if (!Objects.equals(user.getScrisoare(), updateUserRequest.getScrisoare()) && !updateUserRequest.getScrisoare().equals("")) {
            System.out.println("asd2");
            user.setScrisoare(updateUserRequest.getScrisoare());
        }
        if (!Objects.equals(user.getRezumat(), updateUserRequest.getRezumat()) && !updateUserRequest.getRezumat().equals("")) {
            System.out.println("asd2");
            user.setRezumat(updateUserRequest.getRezumat());
        }
        if (user.getBac() != updateUserRequest.getBac() && updateUserRequest.getBac() != 0) {
            System.out.println("asd2");
            user.setBac(updateUserRequest.getBac());
        }
        Dosar dosar;
        if (dosarRepository.existsById(updateUserRequest.getId())) {
            dosar = dosarRepository.getById(updateUserRequest.getId());
            dosar.setId(user.getId());
            dosar.setFile1(updateUserRequest.getDosar().get(0));
            dosar.setFile2(updateUserRequest.getDosar().get(1));
            dosar.setFile3(updateUserRequest.getDosar().get(2));
            user.setDosar(dosar);

        } else if (updateUserRequest.getDosar() != null) {
            dosar = new Dosar();
            dosar.setId(user.getId());
            dosar.setFile1(updateUserRequest.getDosar().get(0));
            dosar.setFile2(updateUserRequest.getDosar().get(1));
            dosar.setFile3(updateUserRequest.getDosar().get(2));
            user.setDosar(dosar);
        }

        userRepository.save(user);

        return ResponseEntity.ok(user);
    }

    @PostMapping("/updateFacultate")
    public ResponseEntity<User> updateFac(@RequestBody FacultaRequest facultaRequest) {
        User user = userRepository.findById(facultaRequest.getId())
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with id: " + facultaRequest.getId()));
        System.out.println("asd1");
        if (!Objects.equals(user.getEmail(), facultaRequest.getEmail()) && !facultaRequest.getEmail().equals("")) {
            System.out.println("asd2");
            user.setEmail(facultaRequest.getEmail());
        }
        if (!Objects.equals(user.getLink(), facultaRequest.getLink()) && !facultaRequest.getLink().equals("")) {
            System.out.println("asd2");
            user.setLink(facultaRequest.getLink());
        }
        if (user.getMedie() != facultaRequest.getMedie() && facultaRequest.getMedie() != 0) {
            System.out.println("asd2");
            user.setMedie(facultaRequest.getMedie());
        }
        if (!Objects.equals(user.getOras(), facultaRequest.getOras()) && !facultaRequest.getOras().equals("")) {
            System.out.println("asd2");
            user.setOras(facultaRequest.getOras());
        }
        if (user.getLocuri() != facultaRequest.getLocuri() && facultaRequest.getLocuri() != 0) {
            System.out.println("asd2");
            user.setLocuri(facultaRequest.getLocuri());
        }
        if (user.getExamen() != facultaRequest.isExamen()) {
            System.out.println("asd2");
            user.setExamen(facultaRequest.isExamen());
        }

        if (user.getTaxa() != facultaRequest.getTaxa() && facultaRequest.getTaxa() != 0) {
            System.out.println("asd2");
            user.setTaxa(facultaRequest.getTaxa());
        }
        if (!Objects.equals(user.getProfil(), facultaRequest.getProfil()) && !facultaRequest.getProfil().equals("")) {
            System.out.println("asd2");
            user.setProfil(facultaRequest.getProfil());
        }

        Set<Specialitati> specialitatis = new HashSet<>();

        if (facultaRequest.getSpecialiati() != null) {
            System.out.println("nu e null");
            if (!facultaRequest.getSpecialiati().isEmpty()) {
                System.out.println("asd2");
                facultaRequest.getSpecialiati().forEach(spec -> {
                    Specialitati specialitate = new Specialitati();
                    specialitate.setSpec(ESpecialiati.valueOf(spec));
                    Example<Specialitati> example = Example.of(specialitate);

                    Optional<Specialitati> result = specialitatiRepository.findOne(example);

//                    String specialitati = specialitatiRepository.findBy().get(0);
                    specialitatis.add(result.orElse(null));
                });
            }
        }

        if(facultaRequest.getSpecialiati().size() !=0){
            user.setSpecialitati(specialitatis);

        }


        System.out.println(user);
//        if (!Objects.equals(user.getUsername(), facultaRequest.getUsername()) && !facultaRequest.getUsername().equals("")) {
//            System.out.println("asd2");
//            user.setUsername(facultaRequest.getUsername());
//        }
        userRepository.save(user);
//        System.out.println("asd3");
//
//
        return ResponseEntity.ok(user);
    }


    @GetMapping("/totimod")
    public ResponseEntity<List<User>> getMods() {
        return ResponseEntity.ok(userRepository.findAll().stream().filter(user -> user.getLocuri() > 0).collect(Collectors.toList()));
    }

    @PostMapping("/aplica")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<Boolean> aplica(@RequestBody AplicaRequest aplicaRequest) {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (principal instanceof UserDetails) {
            UserDetails userDetails = (UserDetails) principal;
            Optional<User> response = userRepository.findByUsername(userDetails.getUsername());
            User oldUser = response.orElse(null);
            if (oldUser == null)
                return ResponseEntity.ok(false);

            Aplicatii applicatie = new Aplicatii();
            applicatie.setId_facultate(aplicaRequest.getId());
            applicatie.setRezultat("In asteptare");

            aplicatiiRepository.save(applicatie);

            Set<Aplicatii> allAplicatii;
            allAplicatii = oldUser.getAplicatii();
            allAplicatii.add(applicatie);

            oldUser.setAplicatii(allAplicatii);

            System.out.println(oldUser);
            userRepository.save(oldUser);

            return ResponseEntity.ok(true);
        }

        return ResponseEntity.ok(false);
    }


    @GetMapping("/mod")
    @PreAuthorize("hasRole('MODERATOR')")
    public String moderatorAccess() {
        return "Moderator Board.";
    }

    @GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public String adminAccess() {
        return "Admin Board.";
    }
}
