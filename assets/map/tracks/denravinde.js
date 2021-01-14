// Add trailhead in form of a Billboard
viewer.entities.add({
  name: "Den Ravinde",
  position: Cesium.Cartesian3.fromDegrees(9.145262455567718,	60.57673305273056),
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
    id: "Den Ravinde",
    positions: Cesium.Cartesian3.fromDegreesArray([
        9.145262455567718,	60.57673305273056,
        9.144597686827183,	60.57699339464307,
        9.14363301359117,	60.57730997912586,
        9.142594747245312,	60.577695462852716,
        9.142127288505435,	60.57781674899161,
        9.141684975475073,	60.577864022925496,
        9.140925155952573,	60.5780762527138,
        9.13976602256298,	60.57815202511847,
        9.13948598317802,	60.57826300151646,
        9.139142408967018,	60.57832905091345,
        9.139115503057837,	60.57828923687339,
        9.139441139996052,	60.57802830822766,
        9.139398308470845,	60.577990002930164,
        9.139165123924613,	60.57795572094619,
        9.139828132465482,	60.57760418392718,
        9.140051929280162,	60.5775114800781,
        9.140300620347261,	60.577444173395634,
        9.140383936464787,	60.577345602214336,
        9.140795404091477,	60.57724451646209,
        9.141192454844713,	60.57710680179298,
        9.141813470050693,	60.576696088537574,
        9.141250038519502,	60.576873030513525,
        9.141652202233672,	60.57655904442072,
        9.141860408708453,	60.57635033503175,
        9.14199166931212,	60.57616911828518,
        9.142053695395589,	60.57604255154729,
        9.142264919355512,	60.575856724753976,
        9.14143905043602,	60.57597876526415,
        9.141053482890129,	60.576211446896195,
        9.140787525102496,	60.57624530978501,
        9.140907973051071,	60.57615394704044,
        9.140937980264425,	60.57605101726949,
        9.141000090166926,	60.57602268643677,
        9.141088016331196,	60.57589603587985,
        9.141087681055069,	60.5758504383266,
        9.141213661059737,	60.57574801146984,
        9.141440223902464,	60.57563845999539,
        9.141361182555556,	60.57559797540307,
        9.141051806509495,	60.5756931938231,
        9.140660790726542,	60.57584582827985,
        9.14025116711855,	60.57586242444813,
        9.139866353943944,	60.576061913743615,
        9.13940493017435,	60.576121509075165,
        9.138667825609446,	60.57645318098366,
        9.138276306912303,	60.57659978047013,
        9.13785981014371,	60.57671528309584,
        9.137595277279615,	60.57686850428581,
        9.1374147310853,	60.57693178765476,
        9.137249942868948,	60.576968835666776,
        9.136934699490666,	60.57696615345776,
        9.136609984561801,	60.577131025493145,
        9.136346960440278,	60.577218029648066,
        9.135966002941132,	60.57722297497094,
        9.13585796020925,	60.5772440135479,
        9.1357690282166,	60.577281983569264,
        9.135630978271365,	60.57729204185307,
        9.135780008509755,	60.577221969142556,
        9.13613598793745,	60.57715700939298,
        9.136334974318743,	60.577026000246406,
        9.136360958218575,	60.5769710149616,
        9.136486016213894,	60.576875964179635,
        9.136806959286332,	60.57669499889016,
        9.136826992034912,	60.57664596475661,
        9.136551981791854,	60.5766980163753,
        9.136132970452309,	60.576877975836396,
        9.135469542816281,	60.576913934201,
        9.135051621124148,	60.576842185109854,
        9.134615007787943,	60.57688602246344,
        9.134825393557549,	60.57680480182171,
        9.13526376709342,	60.576686365529895,
        9.135274412110448,	60.57663498446345,
        9.134888425469398,	60.57669776491821,
        9.134597824886441,	60.57670078240335,
        9.134238576516509,	60.576872108504176,
        9.134059622883797,	60.57690194807947,
        9.133906569331884,	60.57688836939633,
        9.134030789136887,	60.576833467930555,
        9.13414721377194,	60.57680890895426,
        9.134279815480113,	60.576739506796,
        9.13430018350482,	60.576675636693835,
        9.134187446907163,	60.57669868692756,
        9.1340749617666,	60.57662702165544,
        9.13410278968513,	60.576535323634744,
        9.134107986465096,	60.57641261257231,
        9.134086528792977,	60.57633583433926,
        9.133959542959929,	60.576263666152954,
        9.133793665096164,	60.57628168724477,
        9.133498035371304,	60.57636399753392,
        9.133233670145273,	60.57638084515929,
        9.133485294878483,	60.57610860094428,
        9.133818978443742,	60.575991002842784,
        9.133955352008343,	60.57580702006817,
        9.134588101878762,	60.57565472088754,
        9.134674435481429,	60.57561566121876,
        9.134691031649709,	60.57558900676668,
        9.13464124314487,	60.5754376295954,
        9.134816508740187,	60.57539756409824,
        9.134854981675744,	60.57533302344382,
        9.134392468258739,	60.57539521716535,
        9.134908709675074,	60.57498534210026,
        9.134943997487426,	60.57487738318741,
        9.135288493707776,	60.57479037903249,
        9.135249014943838,	60.574745032936335,
        9.134750375524163,	60.57487914338708,
        9.134711399674416,	60.57484268210828,
        9.134804606437683,	60.57468409650028,
        9.134775018319488,	60.57467018254101,
        9.13449908606708,	60.57469004765153,
        9.134303787723184,	60.57481116615236,
        9.134240755811334,	60.574796414002776,
        9.134238325059414,	60.57469641789794,
        9.134085774421692,	60.57458896189928,
        9.134083343669772,	60.574541771784425,
        9.134321473538876,	60.57438159361482,
        9.133955771103501,	60.57443859055638,
        9.13359995931387,	60.574531964957714,
        9.13319000042975,	60.5746069829911,
        9.132912056520581,	60.574682001024485,
        9.132779203355312,	60.57460228912532,
        9.132822705432773,	60.574522158131,
        9.133017668500543,	60.574406990781426,
        9.133219923824072,	60.574252093210816,
        9.13324423134327,	60.574198281392455,
        9.133203914389014,	60.57415209710598,
        9.132885066792369,	60.57427262887359,
        9.132621958851814,	60.57423801161349,
        9.132287185639143,	60.574447475373745,
        9.132237732410431,	60.57455115951598,
        9.131940007209778,	60.57461402378976,
        9.131795587018132,	60.574687952175736,
        9.131641024723649,	60.574660040438175,
        9.131722245365381,	60.57462349534035,
        9.131433991715312,	60.57460798881948,
        9.1313655115664,	60.57459130883217,
        9.131329972296953,	60.57456901296973,
        9.131374899297953,	60.5745345633477,
        9.131282027810812,	60.57450204156339,
        9.131408091634512,	60.574313532561064,
        9.131627781316638,	60.57417246513069,
        9.131616381928325,	60.57413097470999,
        9.131426699459553,	60.574140194803476,
        9.131365260109305,	60.574101554229856,
        9.131386131048203,	60.57404958643019,
        9.131324775516987,	60.57399854063988,
        9.13143340498209,	60.57392184622586,
    ]),
    clampToGround: true,
    width: 4,
    distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 0.2e5),
    material: new Cesium.PolylineOutlineMaterialProperty({
      color: Cesium.Color.fromBytes(204,31,26,220),
      outlineWidth: 1,
      outlineColor: Cesium.Color.fromBytes(204,31,26,220),
    }),
  },
});