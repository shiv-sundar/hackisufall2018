package com.test.foodchain;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonArrayRequest;
import com.android.volley.toolbox.JsonObjectRequest;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class openScanner extends AppCompatActivity {

    private final String url = "10.0.2.2:3000/";
    private JSONObject message;
    private JsonObjectRequest sendObjReq;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_open_scanner);
        final EditText barcode = findViewById(R.id.barcode);
        Button sendCode = findViewById(R.id.sendCode);
        message = new JSONObject();

        sendCode.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                try {
                    JSONObject job = new JSONObject();
                    job.put("type_of_storage", "refrigerated");
                    message.put("block_type", "source");
                    message.put("from", "test");
                    message.put("barcodes", barcode.getText().toString());
                    message.put("meta_data", job);
                } catch (JSONException e) {
                    e.printStackTrace();
                }

                sendObjReq = new JsonObjectRequest(Request.Method.POST, url + "/createBlock", message, new Response.Listener<JSONObject>() {
                    @Override
                    public void onResponse(JSONObject response) {
                        Log.d("success", "Object post success");
                    }
                }, new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                        Log.d("fail", error.toString());
                    }
                });
            }
        });
    }
}