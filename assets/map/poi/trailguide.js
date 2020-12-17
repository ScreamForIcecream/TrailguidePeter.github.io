// Add Trailguide logo
viewer.entities.add({
  position: Cesium.Cartesian3.fromDegrees(8.845, 60.685, 600),
  billboard: {
    image: "https://res.cloudinary.com/trailguide-as/image/upload/v1607637200/logo/trailguidewhite.png",
    scaleByDistance: new Cesium.NearFarScalar(0, 0.1, 1.5e5, 0.01),
    distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 1.5e5),
  },
});
