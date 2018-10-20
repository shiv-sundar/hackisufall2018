package com.test.foodchain;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class ChoosePerson extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_choose_person);
        Button person = findViewById(R.id.customer);
        Button scanner = findViewById(R.id.creator);

        person.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(ChoosePerson.this, openScanner.class);
                startActivity(intent);
            }
        });
    }


}
