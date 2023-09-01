const electronics = {
  brand: "samsung",
  phone: {
    name: "s-23 ultra",
    launch: {
      Announced: "2023, February 01",
      StatusAvailable: "Released 2023, February 17",
    },
    body: {
      Dimensions: "163.4 x 78.1 x 8.9 mm (6.43 x 3.07 x 0.35 in)",
      Weight: "234 g (8.25 oz)",
    },
    features: {
      network: {
        technology: "GSM / CDMA / HSPA / EVDO / LTE / 5G",
      },
      communication: {
        wi_Fi: "802.11 a/b/g/n/ac/6e, tri-band, Wi-Fi Direct",
        bluetooth: "5.3, A2DP, LE",
      },
      camera: {
        backCamera: {
          quad: "200 MP, f/1.7.... zoom",
          tech: "periscope telephoto",
          videoCamera: {
            feature: "LED flash, auto-HDR, panorama",
            video: "8K@24/30fps,....EIS!",
          },
        },
        selfieCamera: {
          single: "12 MP, f/2.2, 26mm (wide), Dual Pixel PDAF",
          selfieFeature: {
            feature: "Dual video call, Auto-HDR, HDR10+",
            video: "4K@30/60fps, 1080p@30fps",
          },
        },
      },
    },
  },
};

/**
      this is an object, here with a lot of nested objects & objects, your task, 
      is to create a dimensional object like "key" and "value" without nested objects.
      (each key will add an underscore)
      for example:
   */

/**
  {
      electronics_brand: "samsung"
      electronics_phone_body_Dimensions: "163.4 x 78.1 x 8.9 mm (6.43 x 3.07 x 0.35 in)"
      electronics_phone_body_Weight: "234 g (8.25 oz)"
      electronics_phone_features_camera_backCamera_quad: "200 MP, f/1.7.... zoom"
      electronics_phone_features_camera_backCamera_tech: "periscope telephoto"
      electronics_phone_features_camera_backCamera_videoCamera_feature: "LED flash, auto-HDR, panorama"
      electronics_phone_features_camera_backCamera_videoCamera_video: "8K@24/30fps,....EIS!"
      electronics_phone_features_camera_selfieCamera_selfieFeature_feature: "Dual video call, Auto-HDR, HDR10+"
      electronics_phone_features_camera_selfieCamera_selfieFeature_video: "4K@30/60fps, 1080p@30fps"
      electronics_phone_features_camera_selfieCamera_single: "12 MP, f/2.2, 26mm (wide), Dual Pixel PDAF"
      electronics_phone_features_communication_bluetooth: "5.3, A2DP, LE"
      electronics_phone_features_communication_wi_Fi: "802.11 a/b/g/n/ac/6e, tri-band, Wi-Fi Direct"
      electronics_phone_features_network_technology: "GSM / CDMA / HSPA / EVDO / LTE / 5G"
      electronics_phone_launch_Announced: "2023, February 01"
      electronics_phone_launch_StatusAvailable: "Released 2023, February 17"
      electronics_phone_name: "s-23 ultra"
  }
   */

const finalObject = {};

const fantastic = (objectName, object) => {
  for (const key in object) {
    if (typeof object[key] === "object") {
      fantastic(`${objectName}_${key}`, object[key]);
    } else {
      finalObject[objectName + "_" + key] = object[key];
    }
  }
};

fantastic("electronics", electronics);
console.log(finalObject);
