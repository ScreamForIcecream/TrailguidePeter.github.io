//Add mountain label & icon
var terrainProvidernes = new Cesium.createWorldTerrain();

var nesbyen = [Cesium.Cartographic.fromDegrees(9.1096, 60.5717),];
var promisenesbyen = Cesium.sampleTerrainMostDetailed(terrainProvidernes, nesbyen);
Cesium.when(promisenesbyen, function(updatednesbyen) {

  Cesium.when.all(
  [Cesium.Resource.fetchImage("https://res.cloudinary.com/dztnnl8x9/image/upload/v1607814557/triangular_hmbuda.png"),],
    function (imagesnes) {
      var facilityHeightnes = imagesnes[0].height;

        viewer.entities.add({
          name: "Nesbyen",
          position: Cesium.Cartesian3.fromRadians(nesbyen[0].longitude, nesbyen[0].latitude, nesbyen[0].height+20),
          billboard: {
            color: Cesium.Color.fromBytes(255,255,255,0),
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            scaleByDistance: new Cesium.NearFarScalar(0, 0.25, 0.5e5, 0.03),
            distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 0.5e5),
            image: imagesnes[0],
          },
          label: {
            text: "Nesbyen",
            font: "40px Arial",
            fillColor: Cesium.Color.fromBytes(255,255,255,220),
            outlineColor: Cesium.Color.fromBytes(20,20,20,220),
            outlineWidth: 3,
            //style: Cesium.LabelStyle.FILL_AND_OUTLINE,
            showBackground : false,
            pixelOffset: new Cesium.Cartesian2(0.0, -facilityHeightnes),
            pixelOffsetScaleByDistance: new Cesium.NearFarScalar(0, 0.7, 0.5e5, 0.05),
            scaleByDistance: new Cesium.NearFarScalar(0, 1, 0.5e5, 0.1),
            distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 0.5e5),
            horizontalOrigin: Cesium.HorizontalOrigin.BOTTOM,
          },
        });
      });
    });
