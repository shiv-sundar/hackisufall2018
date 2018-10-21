package com.example.karth.bloke;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonArrayRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class Main2Activity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);
        final JSONArray response;
        Button plot = findViewById(R.id.button1);
        Button block = findViewById(R.id.parse);
        EditText barcode_input = (EditText)findViewById(R.id.bar_code_input);
        final TextView mTextView = (TextView) findViewById(R.id.textv);
        Button submit = findViewById(R.id.submit);
        final RequestQueue queue = Volley.newRequestQueue(this);
        final String url = "http://ec2-54-210-104-137.compute-1.amazonaws.com:3000/getChain";

        submit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                parseChain(url);
            }
        });


    }

    public void parseChain(String url) {
        JsonArrayRequest stringRequest = new JsonArrayRequest(Request.Method.GET, url + "?barcode=" + barcode_input.getText().toString(), null,
                new Response.Listener<JSONArray>(){


                    @Override
                    public void onResponse(JSONArray response)
                    {
                        mTextView.setVisibility(View.INVISIBLE);



                        //mTextView.setText("Response is: "+ response);
                        //mTextView.setVisibility(View.VISIBLE);
                        //Change to > 0
                        if(response.length() >=1)
                        {
                            // mTextView.setVisibility(View.INVISIBLE);
                            Intent in = new Intent(Main2Activity.this, Main3Activity.class);
                            in.putExtra("key", response.toString());
                            startActivity(in);
                        }
                        else
                        {


                            mTextView.setText("Bar Code could not be found!");
                            mTextView.setVisibility(View.VISIBLE);


                        }
                    }


                }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                mTextView.setText("That didn't work!");
            }
        });

        // Add the request to the RequestQueue.
        queue.add(stringRequest);
    }




        //   jsonObject s = getIntent().getStringExtra("chain");

        try {
            response = new JSONArray(getIntent().getStringExtra("key"));


            block.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    Intent in = new Intent(Main2Activity.this, Main3Activity.class).putExtra("key1", response.toString());

                    startActivity(in);
                }
            });

            plot.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    Intent in = new Intent(Main2Activity.this, MainPLOTActivity.class).putExtra("key2", response.toString());
                    startActivity(in);

                }
            });


    }
    catch (JSONException e) {
        e.printStackTrace();
    }
}}
