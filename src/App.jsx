import { useState } from 'react'
import Map from './components/ReactMap'
import BottomSheet from './components/BottomSheet'
import BusinessList from './components/BusinessList'
import { useGeolocation } from './hooks/useGeolocation'
import { useBusinesses } from './hooks/useBusinesses'

function App() {
  const [selectedBusiness, setSelectedBusiness] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const { location: userLocation, error: locationError, loading: locationLoading } = useGeolocation()
  const { businesses, loading: businessesLoading, error: businessesError } = useBusinesses(userLocation)

  return (
    <div className="h-full w-full relative bg-surface-950">
      {/* Location warning banner */}
      {locationError && (
        <div className="absolute top-0 left-0 right-0 z-10 bg-surface-800 border-b border-surface-700 px-5 py-3">
          <p className="text-sm text-gray-300">
            {locationError}. Showing default Madison location.
          </p>
        </div>
      )}

      {/* Map */}
      <Map
        userLocation={userLocation}
        businesses={businesses}
        selectedBusiness={selectedBusiness}
        onBusinessSelect={setSelectedBusiness}
      />

      {/* Bottom Sheet with Business List */}
      <BottomSheet>
        <BusinessList
          businesses={businesses}
          selectedBusiness={selectedBusiness}
          onBusinessSelect={setSelectedBusiness}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          loading={businessesLoading}
          error={businessesError}
        />
      </BottomSheet>
    </div>
  )
}

export default App