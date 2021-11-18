// Add trailhead in form of a Billboard
viewer.entities.add({
  name: "Tyttebærtrøkket",
  position: Cesium.Cartesian3.fromDegrees(9.160189,	60.572851),
  billboard: {
    image: "https://res.cloudinary.com/dztnnl8x9/image/upload/v1607901172/trailhead_red_woxcny.png",
    scaleByDistance: new Cesium.NearFarScalar(0, 0.3, 0.5e5, 0.01),
    distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 0.2e5),
    verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
    heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
  },
});

// Add trail in form of a Polyline
viewer.entities.add({
  polyline: {
    id: "Tyttebærtrøkket",
    name: "Tyttebærtrøkket",
    positions: Cesium.Cartesian3.fromDegreesArray([
      9.160189,	60.572851,
      9.160178,	60.572774,
      9.160258,	60.572614,
      9.160258,	60.572538,
      9.160408,	60.572378,
      9.160427,	60.572288,
      9.160458,	60.572237,
      9.160513,	60.572192,
      9.16064,	60.572128,
      9.160665,	60.572102,
      9.160655,	60.572077,
      9.16063,	60.572051,
      9.160583,	60.572045,
      9.160542,	60.572019,
      9.160424,	60.572032,
      9.160254,	60.572141,
      9.160194,	60.572154,
      9.160176,	60.572128,
      9.16019,	60.572096,
      9.160372,	60.571942,
      9.160342,	60.571917,
      9.160129,	60.571917,
      9.160024,	60.571878,
      9.159968,	60.571834,
      9.159917,	60.57177,
      9.159862,	60.571654,
      9.15973,	60.571533,
      9.159721,	60.571494,
      9.159802,	60.571379,
      9.159792,	60.571296,
      9.159746,	60.571226,
      9.159663,	60.571187,
      9.159608,	60.571181,
      9.159574,	60.5712,
      9.159511,	60.571341,
      9.159375,	60.571443,
      9.159257,	60.571565,
      9.159113,	60.571808,
      9.159014,	60.571872,
      9.158978,	60.571885,
      9.15894,	60.571878,
      9.15891,	60.571853,
      9.158907,	60.571802,
      9.158888,	60.57177,
      9.15878,	60.571667,
      9.158734,	60.571597,
      9.158714,	60.571424,
      9.158723,	60.57136,
      9.158691,	60.571168,
      9.15873,	60.571066,
      9.158743,	60.57097,
      9.158617,	60.570592,
      9.158568,	60.570502,
      9.158526,	60.570451,
      9.158473,	60.570426,
      9.15829,	60.570397,
      9.158036,	60.570381,
      9.157989,	60.5704,
      9.157985,	60.570419,
      9.158045,	60.570483,
      9.158085,	60.57056,
      9.158198,	60.570643,
      9.158212,	60.570688,
      9.158197,	60.570739,
      9.158109,	60.570886,
      9.157971,	60.571021,
      9.157977,	60.571117,
      9.158049,	60.571245,
      9.158066,	60.571398,
      9.158134,	60.571546,
      9.15809,	60.571616,
      9.15787,	60.571814,
      9.157798,	60.571923,
      9.157797,	60.571994,
      9.15787,	60.572096,
      9.157946,	60.572154,
      9.157965,	60.572192,
      9.15789,	60.572333,
      9.157806,	60.572378,
      9.15744,	60.572307,
      9.15728,	60.572314,
      9.157177,	60.572339,
      9.156934,	60.572461,
      9.156818,	60.572557,
      9.156714,	60.572672,
      9.156395,	60.572883,
      9.156163,	60.572973,
      9.155835,	60.573005,
      9.155448,	60.573082,
      9.155205,	60.57319,
      9.155166,	60.573248,
      9.155169,	60.57328,
      9.155198,	60.573306,
      9.155318,	60.573299,
      9.155713,	60.57319,
      9.155918,	60.573101,
      9.156029,	60.573075,
      9.156194,	60.573056,
      9.156455,	60.573062,
      9.156557,	60.57305,
      9.156874,	60.572973,
      9.157178,	60.572838,
      9.157297,	60.572832,
      9.157598,	60.572902,
      9.157806,	60.572883,
      9.158026,	60.572826,
      9.158298,	60.572698,
      9.158354,	60.572691,
      9.158457,	60.572749,
      9.158463,	60.572909,
      9.158413,	60.573107,
      9.158437,	60.573133,
      9.158486,	60.573146,
      9.15862,	60.573107,
      9.158845,	60.573069,
      9.158957,	60.573011,
      9.159042,	60.572922,
      9.159188,	60.57287,
      9.159284,	60.572851,
      9.159466,	60.572851,
      9.15954,	60.572877,
      9.159585,	60.572909,
      9.159617,	60.57303,
      9.159569,	60.573203,
      9.159587,	60.573318,
      9.159554,	60.57344,
      9.159572,	60.573504,
      9.159598,	60.573523,
    ]),
    clampToGround: true,
    width: 4,
    distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 0.6e5),
    material: new Cesium.PolylineOutlineMaterialProperty({
      color: Cesium.Color.fromBytes(204,31,26,220),
      outlineWidth: 1,
      // outlineColor: Cesium.Color.fromBytes(255,164,161,150),
      outlineColor: Cesium.Color.fromBytes(204,31,26,100),
    }),
  },
});