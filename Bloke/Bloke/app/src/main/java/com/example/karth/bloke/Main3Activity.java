package com.example.karth.bloke;

import android.app.Activity;
import android.content.Context;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
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



public class Main3Activity extends AppCompatActivity {

    private Context mContext;
    private Activity mActivity;
    private TextView mTextViewResult;
    private RequestQueue mQueue;
    private int count = 1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        final JSONArray response;
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main_block);


        try {
            response = new JSONArray(getIntent().getStringExtra("key1"));


            Button parse_chain = findViewById(R.id.parse);

            mTextViewResult = findViewById(R.id.text_view_result);
            mContext = getApplicationContext();
            mActivity = Main3Activity.this;

            parse_chain.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    //mTextViewResult.append("help");
                    jsonParse(response);
                }
            });
        }
        catch (JSONException e) {
            e.printStackTrace();
        }}

    private void jsonParse(JSONArray response) {
        //JSONArray block;
        //   String url = "http://10.0.2.2:3000/findSources";
        //   RequestQueue requestQueue = Volley.newRequestQueue(mContext);
        //   JsonArrayRequest jsonArrayRequest = new JsonArrayRequest(Request.Method.GET, url, null, new Response.Listener<JSONArray>()
        {


            //public void onResponse(JSONArray response)
            {

                try
                {
                    //JSONArray jsonArray = response.getJSONArray("employees");
                    //mTextViewResult.append("in try");
                    //mTextViewResult.append(String.valueOf(response.length()));
                    for (int i = 0; i < response.length(); i++) {

                        JSONObject block= response.getJSONObject(i);
                        if (response.length() > 0) {

                            mTextViewResult.append(String.valueOf(count) + ") ");

                            String type = block.getString("block_type");
                            mTextViewResult.append(type + "\n");

                            String name = block.getString("name");
                            mTextViewResult.append("   "+ name + "\n");

                            String crop = block.getString("crop");
                            mTextViewResult.append("   " + crop + "\n");

                            String hash = block.getString("hash");
                            mTextViewResult.append("   " + hash + "\n");

                            String prev_hash = block.getString("prev_hash");
                            mTextViewResult.append("   " + prev_hash + "\n");

                            String from = block.getString("from");
                            mTextViewResult.append("   " + from + "\n");

                            String amount = block.getString("amount");
                            mTextViewResult.append("   " + amount + "\n");

//                            String loc = block.getString("loc");
//                            mTextViewResult.append("   " + loc + "\n");

                            String time = block.getString("time_left");
                            mTextViewResult.append("   " + time + "\n");


                            // int v = block.getInt("_v");
                            // String id = block.getString("_id");
                            //  String amount = block.getString("amount");

                            if(type.matches("source")) {
                                JSONObject meta = block.getJSONObject("meta_data");

                                String loc = meta.getString("loc");
                                mTextViewResult.append("   " + loc + "\n");
                            }
                            else if(type.matches("transportation"))
                            {
                                JSONObject meta = block.getJSONObject("meta_data");
                                String temp = meta.getString("temp");
                                mTextViewResult.append("   " + temp + "\n");
                            }
                            else if(type.matches("storage"))
                            {
                                JSONObject meta = block.getJSONObject("meta_data");
                                String temp = meta.getString("temp");
                                String loc = meta.getString("loc");
                                mTextViewResult.append("   " + temp + "\n");
                                mTextViewResult.append("   " + loc + "\n");
                            }



                            count = count + 1;
                        }


                    }
                }
                catch (JSONException e)
                {
                    e.printStackTrace();
                }
            }


        }


    }
}
