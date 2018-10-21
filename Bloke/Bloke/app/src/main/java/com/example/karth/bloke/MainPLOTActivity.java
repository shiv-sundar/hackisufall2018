package com.example.karth.bloke;

import android.content.Intent;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import org.json.JSONArray;
import org.json.JSONObject;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import android.annotation.SuppressLint;
import android.graphics.Color;
import android.os.Build;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.github.mikephil.charting.charts.BarChart;
import com.github.mikephil.charting.components.AxisBase;
import com.github.mikephil.charting.components.XAxis;
import com.github.mikephil.charting.components.YAxis;
import com.github.mikephil.charting.data.BarData;
import com.github.mikephil.charting.data.BarDataSet;
import com.github.mikephil.charting.data.BarEntry;
import com.github.mikephil.charting.interfaces.datasets.IBarDataSet;
import com.github.mikephil.charting.utils.ColorTemplate;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.AbstractQueue;
import java.util.ArrayList;
import java.util.List;

public class MainPLOTActivity extends AppCompatActivity {
    ArrayList<String> ar;
    ArrayList<BarEntry> BARENTRY;
    ArrayList<String> BarEntryLabels;
    BarDataSet Bardataset;
    BarData BARDATA;
    JSONArray response;

    {
        try {
            response = new JSONArray(getIntent().getStringExtra("key1"));
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main_plot);

        Button button = findViewById(R.id.button);

        BarChart barChart = (BarChart) findViewById(R.id.barchart);

        BARENTRY = new ArrayList<>();

        BarEntryLabels = new ArrayList<String>();

        AddValuesToBARENTRY(response);

        //AddValuesToBarEntryLabels();

        Bardataset = new BarDataSet(BARENTRY, "Transport Services");

        BARDATA = new BarData(BarEntryLabels, Bardataset);

        Bardataset.setColors(ColorTemplate.COLORFUL_COLORS);

        barChart.setData(BARDATA);

        barChart.animateY(3000);

        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                try {
                    Uri uri = Uri.parse(openMaps(ar));
                    Intent mapIntent = new Intent(Intent.ACTION_VIEW, uri);
                    mapIntent.setPackage("com.google.android.apps.maps");
                    startActivity(mapIntent);
                } catch (UnsupportedEncodingException e) {
                    e.printStackTrace();
                }
            }
        });

    }

    public void AddValuesToBARENTRY(JSONArray response){


        try
        {
            for(int i =0;i<response.length();i++)
            {
                JSONObject block= response.getJSONObject(i);
                if (response.length() > 0) {

                    String type = block.getString("block_type");
                    String name = block.getString("name");
                    String time =block.getString("time_received");


                    if(i != response.length()-1) {
                        int start = Integer.parseInt(time);
                        JSONObject next = response.getJSONObject(i + 1);
                        String ntime = next.getString("time_received");
                        int nexttime = Integer.parseInt(ntime);

                        int neww = nexttime - start;
                        if(type == "transporation")
                        {
                            BARENTRY.add(new BarEntry(neww, i));
                            BarEntryLabels.add(name);
                        }
                    }

                    if(type != "transporation")
                    {
                        JSONObject meta = block.getJSONObject("meta_data");

                        String loc = meta.getString("loc");

                        ar.add(loc);
                    }

                }

            }
        }
        catch (JSONException e)
        {
            e.printStackTrace();
        }
    }

    private String openMaps(ArrayList<String> ar) throws UnsupportedEncodingException {
        String Url="origin=";
        for(int x=0; x < ar.size(); x++){
            if (x != ar.size() - 3) {
                Url += ar.get(x) + "&waypoints=";
            }

            else if (x == ar.size() - 2) {
                Url += ar.get(x) + "&destination=";
            }

            else {
                Url += ar.get(x);
            }
        }

        String query = URLEncoder.encode(Url, "utf-8");
        String url = "https://www.google.com/maps/dir/?api=1&" + query;

        return url;
    };
}
