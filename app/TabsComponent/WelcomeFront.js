
import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const data = [
  {
    title: "AD Top Rated",
    image: require("../../assets/images/geniue.png"),
  },
  {
    title: "AD - Dispatch Truck",
    image: require("../../assets/images/green.jpg"),
  },
  {
    title: "Ride Destinations",
    image: require("../../assets/images/deliverytru.jpg"),
  },
  {
    title: "AD - Job Availability",
    image: require("../../assets/images/buke1.jpg"),
  },
  {
    title: "AD -Delivery Travelers",
    image: require("../../assets/images/green2.jpg"),
  },
];

class WelcomeFront extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.tick();
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  i = 0;

  tick = () => {
    this.slider.goToSlide(this.i);
    this.i += 1;
    if (this.i === data.length) {
      this.i = 0;
    }
  };

  renderItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => this.handleImagePress(item.title)}>
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  handleImagePress = (title) => {
    // Handle the press event here by navigating to the appropriate screen based on the title
    switch (title) {
      case "Home":
        this.props.navigation.navigate("/TabsComponent/DeliveryTwo");
        break;
      case "Login":
        this.props.navigation.navigate("/TabsComponent/DeliveryTwo");
        break;
      case "Direct":
        this.props.navigation.navigate("/TabsComponent/JobAvailability");
        break;
      case "Outside":
        this.props.navigation.navigate("/TabsComponent/DeliveryOne");
        break;
      case "AnotherScreen":
        this.props.navigation.navigate("/TabsComponent/JobAvailability");
        break;
      default:
        console.log(`Image "${title}" was pressed.`);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <AppIntroSlider
          data={data}
          renderItem={this.renderItem}
          showPrevButton
          showNextButton
          activeDotStyle={{ backgroundColor: "white" }}
          dotStyle={{ backgroundColor: "lightgray" }}
          initialScrollIndex={this.state.activeIndex}
          renderNextButton={() => (
            <View style={styles.iconButton}>
              <Icon name="chevron-right" size={24} color="white" />
            </View>
          )}
          renderPrevButton={() => (
            <View style={styles.iconButton}>
              <Icon name="chevron-left" size={24} color="white" />
            </View>
          )}
          sliderIndex={this.state.activeIndex}
          ref={(ref) => (this.slider = ref)} // Store a reference to the slider
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5", // Background color of the AppIntroSlider
    marginTop: 20, // Add a top margin
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent", // Make the slide background transparent
  },
  image: {
    width: 360,
    height: 200,
    resizeMode: "cover",
    marginTop: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  iconButton: {
    backgroundColor: "black",
    borderRadius: 50,
    padding: 10,
  },
});

export default WelcomeFront;





// import { useRouter } from "expo-router";
// import React from "react";
// import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
// import AppIntroSlider from "react-native-app-intro-slider";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";


// const data = [
//   {
//     title: "AD Top Rated",
//     image: require("../../assets/images/geniue.png"), // Replace with your image source
//   },
//   {
//     title: "AD - Dispatch Truck",
//     image: require("../../assets/images/green.jpg"), // Replace with your image source
//   },
//   {
//     title: "Ride Destinations",
//     image: require("../../assets/images/deliverytru.jpg"), // Replace with your image source
//   },
//   {
//     title: "AD - Job Availability",
//     image: require("../../assets/images/buke1.jpg"), // Replace with your image source
//   },
//   {
//     title: "AD -Delivery Travelers",
//     image: require("../../assets/images/green2.jpg"), // Replace with your image source
//   },
// ];

// const WelcomeFront = () => {
//   const router = useRouter();

//   const renderItem = ({ item }) => (
//     <TouchableOpacity onPress={() => handleImagePress(item.title)}>
//       <View style={styles.slide}>
//         <Image source={item.image} style={styles.image} />
//         <Text style={styles.title}>{item.title}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   const handleImagePress = (title) => {
//     // Handle the press event here by navigating to the appropriate screen based on the title
//     switch (title) {
//       case "Home":
//         router.push("/TabsComponent/DeliveryTwo");
//         break;
//       case "Login":
//         router.push("/TabsComponent/DeliveryTwo");
//         break;
//       case "Direct":
//         router.push("/TabsComponent/JobAvailability");
//         break;
//       case "Outside":
//         router.push("/TabsComponent/DeliveryOne");
//         break;
//       case "AnotherScreen":
//         router.push("/TabsComponent/JobAvailability");
//       default:
//         console.log(`Image "${title}" was pressed.`);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <AppIntroSlider
//         data={data}
//         renderItem={renderItem}
//         showPrevButton
//         showNextButton
//         renderNextButton={() => (
//           <View style={styles.iconButton}>
//             <Icon name="chevron-right" size={24} color="white" />
//           </View>
//         )}
//         renderPrevButton={() => (
//           <View style={styles.iconButton}>
//             <Icon name="chevron-left" size={24} color="white" />
//           </View>
//         )}
//       />
      
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "lightblue", // Background color of the AppIntroSlider
//     marginTop: 20, // Add a top margin
//   },
//   slide: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "transparent", // Make the slide background transparent
//   },
//   image: {
//     width: 360,
//     height: 200,
//     resizeMode: "cover",
//     marginTop: 10,
//   },
//   title: {
//     fontSize: 15,
//     fontWeight: "bold",
//   },
//   iconButton: {
//     backgroundColor: "black",
//     borderRadius: 50,
//     padding: 10,
//   },
// });

// export default WelcomeFront;
