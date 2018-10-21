package com.example.karth.bloke;

import android.content.Intent;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import org.json.JSONArray;
import org.json.JSONObject;

public class MainPLOTActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main_plot);
    }

    private Intent openMaps(JSONObject obj) {
        String Url = "https://www.google.com/maps/dir/?api=1&";
        for (int x = 0; x < obj.length(); x++) {
            String val = obj[x];
            if (val.split(" ").length != 1) {
                for (String y : val.split(" ")) {
                    Url += y + "%";
                }
            }

            else {
                Url += obj[x];
            }
        }
    }
}
