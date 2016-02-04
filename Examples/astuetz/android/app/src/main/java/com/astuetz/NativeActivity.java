package com.astuetz;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;

public class NativeActivity extends AppCompatActivity {

    @Override
    protected void onCreate(@android.support.annotation.Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_native);

        Toolbar toolbar = (Toolbar) findViewById(R.id.activity_native_toolbar);

        toolbar.setNavigationIcon(R.drawable.arrow_back);
        toolbar.setTitle("React Native");

        startActivity(new Intent(NativeActivity.this, MainActivity.class));
    }

}
