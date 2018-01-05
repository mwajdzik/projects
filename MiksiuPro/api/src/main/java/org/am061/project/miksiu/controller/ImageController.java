package org.am061.project.miksiu.controller;

import org.apache.commons.io.FileUtils;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.File;
import java.io.IOException;
import java.net.URL;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
public class ImageController {

    @ResponseBody
    @GetMapping(value = "/images", produces = MediaType.IMAGE_JPEG_VALUE)
    public byte[] getImageById(@RequestParam(value = "id") String id) throws IOException {
        File dir = new File("images");
        File destination = new File(dir, id.replaceAll("/", "_").substring(65, Math.min(250, id.length() - 1)));

        if (!destination.exists()) {
            FileUtils.copyURLToFile(new URL("https://images.tmecosys.com/images/" + id), destination);
        }

        return FileUtils.readFileToByteArray(destination);
    }
}