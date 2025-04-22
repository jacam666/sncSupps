"use client";
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-50 min-h-screen py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card elevation={0} >
            <CardActionArea >
              <CardMedia
                component="img"
                height="140"
                image="/sncImages/snc-products_edited.jpg"
                alt="protein image"
              />
              <CardContent className="bg-[var(--snc-orange)]">
                <Typography gutterBottom variant="h5">
                  Great tasting protein
                </Typography>
                <Typography  >
                  SNC Supplements are a range of products designed to help you achieve your fitness goals.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card elevation={0} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/sncImages/CarouselStageB4Pump_edited.jpg"
                alt="protein image"
              />
              <CardContent className="bg-[var(--snc-orange)]">
                <Typography gutterBottom variant="h5">
                  Extremely effective pre-workouts
                </Typography>
                <Typography  >
                  Unleash your full potential with our premium pre-workouts, meticulously designed to elevate your exercise routine.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card elevation={0} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/sncImages/CarouselOnlyWheyPromotion_edited.jpg"
                alt="protein image"
              />
              <CardContent className="bg-[var(--snc-orange)]">
                <Typography gutterBottom variant="h5">
                  The Only Whey protein shake
                </Typography>
                <Typography  >
                  Each serving delivers up to 24% protein from instantized whey protein concentrate.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card elevation={0} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/sncImages/homepage-snc-display-image2_edited.jpg"
                alt="protein image"
              />
              <CardContent className="bg-[var(--snc-orange)]">
                <Typography gutterBottom variant="h5">
                  Wide range of products
                </Typography>
                <Typography className="xl:pb-6" >
                  We have products ranging from proteins and pre-workouts to fat burners.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

        </div>
      </div>
    </div>
  );
}
