// Add trailhead in form of a Billboard
viewer.entities.add({
  name: "Syningen",
  position: Cesium.Cartesian3.fromDegrees(9.1566236, 60.5786747),
  billboard: {
    image: "https://res.cloudinary.com/dztnnl8x9/image/upload/v1607904371/trailhead_blue_owmcnk.png",
    scaleByDistance: new Cesium.NearFarScalar(0, 0.3, 0.5e5, 0.01),
    distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 0.2e5),
    verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
    heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
  },
});

// Add trail in form of a Polyline
viewer.entities.add({
  polyline: {
    id: "Syningen",
    positions: Cesium.Cartesian3.fromDegreesArray([
      9.05924,	60.534330000000004,
      9.05999,	60.53423000000001,
      9.06053,	60.534290000000006,
      9.06126,	60.53421,
      9.06182,	60.53423000000001,
      9.06215,	60.53389000000001,
      9.06263,	60.53379,
      9.063270000000001,	60.533750000000005,
      9.06389,	60.53367000000001,
      9.06456,	60.533480000000004,
      9.06487,	60.53316,
      9.065790000000002,	60.53323,
      9.06644,	60.53323,
      9.066830000000001,	60.53349000000001,
      9.06703,	60.53360000000001,
      9.06633,	60.53372,
      9.06582,	60.53388,
      9.06605,	60.53396000000001,
      9.066550000000001,	60.53388,
      9.06733,	60.5339,
      9.068010000000001,	60.53401,
      9.06784,	60.5341,
      9.067590000000001,	60.53416000000001,
      9.06775,	60.53432000000001,
      9.068200000000001,	60.53436000000001,
      9.068230000000002,	60.534400000000005,
      9.067810000000001,	60.53448,
      9.068570000000001,	60.53463000000001,
      9.06803,	60.534760000000006,
      9.068370000000002,	60.534850000000006,
      9.068990000000001,	60.534690000000005,
      9.06944,	60.53461000000001,
      9.06977,	60.53441000000001,
      9.07022,	60.53423000000001,
      9.070530000000002,	60.53403000000001,
      9.07098,	60.533970000000004,
      9.07151,	60.533930000000005,
      9.07126,	60.53421,
      9.070920000000001,	60.53452000000001,
      9.070530000000002,	60.53466,
      9.06958,	60.535270000000004,
      9.069460000000001,	60.535500000000006,
      9.06921,	60.535790000000006,
      9.069320000000001,	60.53605,
      9.07005,	60.53638000000001,
      9.069970000000001,	60.536590000000004,
      9.0698,	60.53678000000001,
      9.06986,	60.53698000000001,
      9.070160000000001,	60.537200000000006,
      9.07131,	60.53746,
      9.07103,	60.537580000000005,
      9.07061,	60.53754000000001,
      9.070810000000002,	60.53772000000001,
      9.07098,	60.537760000000006,
      9.07123,	60.537910000000004,
      9.071250000000001,	60.538050000000005,
      9.070820000000001,	60.53797000000001,
      9.070400000000001,	60.537940000000006,
      9.07027,	60.537960000000005,
      9.07027,	60.53806,
      9.071010000000001,	60.538410000000006,
      9.071430000000001,	60.538560000000004,
      9.071340000000001,	60.538790000000006,
      9.07099,	60.539,
      9.0706,	60.53915000000001,
      9.070770000000001,	60.539260000000006,
      9.07117,	60.53929000000001,
      9.07117,	60.539500000000004,
      9.071060000000001,	60.53979,
      9.07075,	60.540130000000005,
      9.070580000000001,	60.540470000000006,
      9.07099,	60.54074000000001,
      9.07197,	60.54066,
      9.07248,	60.540530000000004,
      9.073680000000001,	60.54028,
      9.073770000000001,	60.540440000000004,
      9.07366,	60.540820000000004,
      9.073630000000001,	60.541000000000004,
      9.07366,	60.54121000000001,
      9.073350000000001,	60.541450000000005,
      9.07361,	60.541740000000004,
      9.07409,	60.54193000000001,
      9.074250000000001,	60.54207,
      9.07586,	60.54213000000001,
      9.075080000000002,	60.541810000000005,
      9.0747,	60.54157000000001,
      9.07451,	60.54131,
      9.0746,	60.54101000000001,
      9.07484,	60.540710000000004,
      9.07545,	60.540310000000005,
      9.07582,	60.54034000000001,
      9.075510000000001,	60.540490000000005,
      9.07606,	60.540440000000004,
      9.076500000000001,	60.540290000000006,
      9.07719,	60.540240000000004,
      9.077630000000001,	60.540150000000004,
      9.07792,	60.540310000000005,
      9.0777,	60.54048,
      9.077390000000001,	60.540600000000005,
      9.077810000000001,	60.540670000000006,
      9.07807,	60.540580000000006,
      9.078570000000001,	60.54065000000001,
      9.07853,	60.54081000000001,
      9.07834,	60.540980000000005,
      9.0784,	60.54111,
      9.07934,	60.54135000000001,
      9.0799,	60.54139000000001,
      9.08046,	60.54148000000001,
      9.08069,	60.54164000000001,
      9.08089,	60.541940000000004,
      9.08079,	60.54225,
      9.08083,	60.54224000000001,
      9.080670000000001,	60.54220000000001,
      9.080670000000001,	60.542350000000006,
      9.080910000000001,	60.54242000000001,
      9.08112,	60.542370000000005,
      9.08106,	60.542480000000005,
      9.081000000000001,	60.54274,
      9.08087,	60.54294,
      9.081000000000001,	60.54319,
      9.08127,	60.54312,
      9.081620000000001,	60.543220000000005,
      9.08202,	60.543220000000005,
      9.082080000000001,	60.54309000000001,
      9.08214,	60.54287000000001,
      9.082510000000001,	60.542550000000006,
      9.083590000000001,	60.5427,
      9.083910000000001,	60.54271000000001,
      9.084050000000001,	60.54292,
      9.08432,	60.543110000000006,
      9.084990000000001,	60.542840000000005,
      9.085650000000001,	60.54305000000001,
      9.08596,	60.54281,
      9.086110000000001,	60.54256,
      9.08634,	60.542390000000005,
      9.086630000000001,	60.542100000000005,
      9.086870000000001,	60.54195000000001,
      9.08712,	60.541850000000004,
      9.08783,	60.541610000000006,
      9.08839,	60.541540000000005,
      9.088970000000002,	60.54151,
      9.08993,	60.54139000000001,
      9.090340000000001,	60.54142,
      9.090720000000001,	60.54164000000001,
      9.090240000000001,	60.541650000000004,
      9.08995,	60.54173000000001,
      9.090300000000001,	60.542010000000005,
      9.090530000000001,	60.54213000000001,
      9.090660000000002,	60.54222000000001,
      9.09049,	60.54240000000001,
      9.09055,	60.54276000000001,
      9.09111,	60.5427,
      9.09234,	60.542410000000004,
      9.09298,	60.542280000000005,
      9.093630000000001,	60.54218,
      9.09392,	60.542120000000004,
      9.094330000000001,	60.54207,
      9.09448,	60.54227,
      9.094370000000001,	60.54240000000001,
      9.09417,	60.54256,
      9.09425,	60.54281,
      9.09448,	60.543060000000004,
      9.09448,	60.543400000000005,
      9.09481,	60.54365000000001,
      9.09496,	60.543400000000005,
      9.09514,	60.54298000000001,
      9.09589,	60.54269000000001,
      9.09589,	60.54254,
      9.09599,	60.542350000000006,
      9.096260000000001,	60.542120000000004,
      9.096720000000001,	60.54207,
      9.097050000000001,	60.54207,
      9.09651,	60.54240000000001,
      9.09693,	60.542320000000004,
      9.097090000000001,	60.54225,
      9.097470000000001,	60.54213000000001,
      9.09778,	60.542010000000005,
      9.09824,	60.541920000000005,
      9.09857,	60.54196,
      9.098880000000001,	60.542100000000005,
      9.09965,	60.54256,
      9.099590000000001,	60.54251000000001,
      9.10011,	60.54258000000001,
      9.101040000000001,	60.54249000000001,
      9.10115,	60.54252,
      9.10121,	60.542680000000004,
      9.101370000000001,	60.54276000000001,
      9.10154,	60.54271000000001,
      9.10187,	60.542460000000005,
      9.102020000000001,	60.54216,
      9.102810000000002,	60.542280000000005,
      9.103010000000001,	60.542370000000005,
      9.10355,	60.54249000000001,
      9.103890000000002,	60.54269000000001,
      9.10424,	60.54276000000001,
      9.10499,	60.54263,
      9.105260000000001,	60.542390000000005,
      9.105360000000001,	60.54225,
      9.105360000000001,	60.54218,
      9.10551,	60.541940000000004,
      9.106250000000001,	60.54177000000001,
      9.106520000000002,	60.54175000000001,
      9.107230000000001,	60.54195000000001,
      9.106710000000001,	60.54209,
      9.10642,	60.542530000000006,
      9.1064,	60.542680000000004,
      9.107090000000001,	60.54265,
      9.10729,	60.5427,
      9.107650000000001,	60.542680000000004,
      9.108540000000001,	60.54254,
      9.11026,	60.54271000000001,
      9.111450000000001,	60.54274,
      9.11213,	60.542860000000005,
      9.11236,	60.54287000000001,
      9.112820000000001,	60.542840000000005,
      9.113710000000001,	60.542950000000005,
      9.11415,	60.54316000000001,
      9.114230000000001,	60.543420000000005,
      9.11406,	60.54356000000001,
      9.114650000000001,	60.54390000000001,
      9.11458,	60.544270000000004,
      9.114090000000001,	60.54449,
      9.113230000000001,	60.544650000000004,
      9.11298,	60.5448,
      9.112860000000001,	60.544970000000006,
      9.111970000000001,	60.545,
      9.111590000000001,	60.544830000000005,
      9.111030000000001,	60.544630000000005,
      9.1103,	60.544560000000004,
      9.109160000000001,	60.54471,
      9.1081,	60.54477000000001,
      9.107940000000001,	60.544830000000005,
      9.10771,	60.545230000000004,
      9.10679,	60.545590000000004,
      9.10675,	60.545750000000005,
      9.106900000000001,	60.546310000000005,
      9.10661,	60.54647000000001,
      9.106190000000002,	60.546290000000006,
      9.106,	60.54600000000001,
      9.105730000000001,	60.546110000000006,
      9.10565,	60.546440000000004,
      9.10553,	60.546710000000004,
      9.105550000000001,	60.547000000000004,
      9.105690000000001,	60.547250000000005,
      9.10603,	60.54710000000001,
      9.10607,	60.54757000000001,
      9.10571,	60.547830000000005,
      9.105590000000001,	60.54782,
      9.105360000000001,	60.547740000000005,
      9.10509,	60.54782,
      9.10538,	60.54805,
      9.10476,	60.548170000000006,
      9.10466,	60.54796,
      9.104360000000002,	60.54791,
      9.104280000000001,	60.548120000000004,
      9.1043,	60.548260000000006,
      9.10387,	60.54827,
      9.1033,	60.54818,
      9.10308,	60.548260000000006,
      9.10237,	60.548260000000006,
      9.101310000000002,	60.54887000000001,
      9.10083,	60.54894,
      9.10021,	60.54907000000001,
      9.10073,	60.549240000000005,
      9.10036,	60.54941,
      9.099960000000001,	60.54952000000001,
      9.099810000000002,	60.54966,
      9.09961,	60.549980000000005,
      9.099860000000001,	60.550110000000004,
      9.100710000000001,	60.55028000000001,
      9.10144,	60.550290000000004,
      9.10173,	60.55013,
      9.10345,	60.54994000000001,
      9.10393,	60.549780000000005,
      9.10499,	60.54954000000001,
      9.106710000000001,	60.549240000000005,
      9.10665,	60.549510000000005,
      9.106440000000001,	60.54959,
      9.107190000000001,	60.549710000000005,
      9.10675,	60.549980000000005,
      9.10603,	60.55017000000001,
      9.10542,	60.550520000000006,
      9.10627,	60.55107,
      9.107190000000001,	60.55129,
      9.107330000000001,	60.55144000000001,
      9.10682,	60.55151000000001,
      9.106570000000001,	60.551570000000005,
      9.10665,	60.5519,
      9.107190000000001,	60.5527,
      9.10773,	60.55324,
      9.107190000000001,	60.55389,
      9.10673,	60.55454,
      9.106340000000001,	60.55471000000001,
      9.10534,	60.55487000000001,
      9.10501,	60.555550000000004,
      9.10449,	60.554950000000005,
      9.10391,	60.55547000000001,
      9.10312,	60.55575,
      9.102490000000001,	60.55561,
      9.10195,	60.555460000000004,
      9.100840000000002,	60.55491000000001,
      9.10064,	60.55462000000001,
      9.10007,	60.55438,
      9.099720000000001,	60.554370000000006,
      9.09866,	60.55454,
      9.098790000000001,	60.55509000000001,
      9.0981,	60.55572000000001,
      9.0975,	60.555930000000004,
      9.09712,	60.55631,
      9.09679,	60.556470000000004,
      9.095680000000002,	60.556810000000006,
      9.09575,	60.557100000000005,
      9.09502,	60.55718,
      9.094430000000001,	60.557590000000005,
      9.094940000000001,	60.558310000000006,
      9.094270000000002,	60.55845000000001,
      9.094560000000001,	60.558960000000006,
      9.09497,	60.55955,
      9.09308,	60.5596,
      9.092220000000001,	60.55969,
      9.09204,	60.560030000000005,
      9.092170000000001,	60.56024000000001,
      9.09225,	60.560480000000005,
      9.09157,	60.56062000000001,
      9.089070000000001,	60.56035000000001,
      9.088840000000001,	60.56063,
      9.089170000000001,	60.56152,
      9.0876,	60.56145000000001,
      9.087190000000001,	60.561690000000006,
      9.087750000000002,	60.56246,
      9.08623,	60.56226,
      9.085890000000001,	60.56241000000001,
      9.08718,	60.56288000000001,
      9.08751,	60.563300000000005,
      9.0897,	60.56295000000001,
      9.09082,	60.5628,
      9.09107,	60.562850000000005,
      9.09125,	60.563010000000006,
      9.09219,	60.563190000000006,
      9.09303,	60.563100000000006,
      9.09519,	60.56309,
      9.0974,	60.56284000000001,
      9.09781,	60.56307,
      9.09885,	60.563010000000006,
      9.0982,	60.563700000000004,
      9.099870000000001,	60.563770000000005,
    ]),
    clampToGround: true,
    width: 4,
    distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 0.2e5),
    material: new Cesium.PolylineOutlineMaterialProperty({
      color: Cesium.Color.fromBytes(39,121,189,220),
      outlineWidth: 1,
      outlineColor: Cesium.Color.fromBytes(39,121,189,220),
    }),
  },
});