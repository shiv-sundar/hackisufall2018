package com.example.karth.bloke;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONException;
import org.json.JSONObject;

public class sourceCreation extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_source_creation);
        final EditText productName = findViewById(R.id.productName);
        final EditText amount = findViewById(R.id.amount);
        final EditText barcode = findViewById(R.id.barcode);
        final EditText location = findViewById(R.id.location);
        final EditText crop = findViewById(R.id.crop);
        final Button submit = findViewById(R.id.submit);
        submit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                try {
                    test(productName.getText().toString(), amount.getText().toString(), barcode.getText().toString(), location.getText().toString(), crop.getText().toString());
                } catch (JSONException e) {
                    e.printStackTrace();
                }

                finish();
            }
        });
    }

    public void test(String name, String amount, String barcode, String location, String crop) throws JSONException {
        RequestQueue queue = Volley.newRequestQueue(this);
        String url = "http://ec2-54-210-104-137.compute-1.amazonaws.com:3000/createBlock";
        JSONObject body = new JSONObject();
        JSONObject met = new JSONObject();
        met.put("location", location);
        body.put("crop", crop);
        body.put("block_type", "source");
        body.put("name", name);
        body.put("amount", amount);
        body.put("barcodes", barcode);
        body.put("meta_data", met);
        JsonObjectRequest stringRequest = new JsonObjectRequest(Request.Method.POST, url, body, new Response.Listener<JSONObject>() {

            @Override
            public void onResponse(JSONObject response) {
                Log.i("newVal", "onResponse: ok");
            }

        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Log.i("newVal", "failed");
            }
        });

        queue.add(stringRequest);
    }
}
