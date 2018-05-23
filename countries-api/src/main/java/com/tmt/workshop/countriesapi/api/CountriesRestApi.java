package com.tmt.workshop.countriesapi.api;

import com.tmt.workshop.countriesapi.model.Country;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/countries")
public class CountriesRestApi {

    private List<Country> countries;

    public CountriesRestApi() {
        final Country india = new Country();
        india.setCapital("New Delhi");
        india.setIsdCode("+91");
        india.setIsoCode("IN");
        india.setName("India");

        final Country netherlands = new Country();
        netherlands.setIsoCode("NL");
        netherlands.setIsdCode("+31");
        netherlands.setCapital("Amsterdam");
        netherlands.setName("Netherlands");

        final Country usa = new Country();
        usa.setName("USA");
        usa.setCapital("New York");
        usa.setIsdCode("+1");
        usa.setIsoCode("US");

        countries = Arrays.asList(india, netherlands, usa);
    }

    @GetMapping
    public List<Country> getCountries() {
        return countries;
    }

}
