package edu.psgv.sweng861.web.rest;

import java.io.IOException;
import java.net.URI;
import java.net.http.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * REST controller for managing the current user's account.
 */
@RestController
@RequestMapping("/api/amazonSearch")
public class AmazonSearch {

    private final Logger log = LoggerFactory.getLogger(AmazonSearch.class);

    public AmazonSearch() {}

    /**
     * {@code GET /search} : search through Amazon items.
     *
     * @param searchText: input search text
     * @return the results of the search
     */
    @GetMapping("/search")
    public String getAmazonResults(String searchText) {
        log.debug("REST request to search Amazon items");
        HttpRequest request = HttpRequest.newBuilder()
            .uri(
                URI.create(
                    "https://real-time-amazon-data.p.rapidapi.com/search?query=" +
                    searchText +
                    "&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL"
                )
            )
            .header("x-rapidapi-key", "dbaecc3f77msh44ac418a6aae978p119ae9jsne358b945f698")
            .header("x-rapidapi-host", "real-time-amazon-data.p.rapidapi.com")
            .method("GET", HttpRequest.BodyPublishers.noBody())
            .build();
        HttpResponse<String> response;
        try {
            response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException | InterruptedException e) {
            throw new RuntimeException(e);
        }
        return response.body();
    }
}
