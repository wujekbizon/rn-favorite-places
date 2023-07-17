import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FavoritePlacesScreen, AddPlaceScreen, MapScreen, PlaceDetailsScreen } from '../screens'
import { IconButton } from '../components'
import { Colors } from '../constants/style'

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.primary500 },
          headerTintColor: Colors.gray700,
          contentStyle: { backgroundColor: Colors.gray700 },
          animation: 'fade_from_bottom',
        }}
      >
        <Stack.Screen
          name="FavoritePlaces"
          component={FavoritePlacesScreen}
          options={({ navigation }) => ({
            title: 'Your Favorite Places',
            headerRight: ({ tintColor }) => (
              <IconButton
                icon="add"
                color={tintColor}
                size={26}
                onPress={() => {
                  navigation.navigate('AddPlace')
                }}
              />
            ),
          })}
        />
        <Stack.Screen
          name="AddPlace"
          component={AddPlaceScreen}
          options={{
            title: 'Add a new Place',
          }}
        />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen
          name="PlaceDetails"
          component={PlaceDetailsScreen}
          options={{
            title: 'Loading Place...',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Navigation
