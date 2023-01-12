# Generated by Django 4.1.5 on 2023-01-11 17:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("myapis", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Record",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("record_name", models.TextField(max_length=30)),
            ],
        ),
        migrations.AddField(
            model_name="usermodel",
            name="related_to",
            field=models.ForeignKey(
                default=1995,
                on_delete=django.db.models.deletion.CASCADE,
                to="myapis.record",
            ),
            preserve_default=False,
        ),
    ]
