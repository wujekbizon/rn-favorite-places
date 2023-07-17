import { useEffect, useCallback, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import Navigation from './navigation/Navigation'
import { init } from './util/database'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        await init()
      } catch (e) {
        console.warn(e)
      } finally {
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <Navigation onReady={onLayoutRootView} />
      </View>
    </>
  )
}
