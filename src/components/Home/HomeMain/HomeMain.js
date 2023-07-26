import { ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import Categories from '../../Categories/Categories'
import FeaturedRow from '../../FeaturedRow/FeaturedRow'
import { useDispatch, useSelector } from 'react-redux'
import { selectFeaturedCategories, setCategories, setFeaturedCategories } from '@slices/categoriesSlice'
import { fetchFeaturedCategories, getCategories } from '@services/sanityService'

const HomeMain = () => {
  const featuredCategories = useSelector(selectFeaturedCategories)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchFeaturedData = async () => {
      try {
        const data = await fetchFeaturedCategories()
        dispatch(setFeaturedCategories(data))
      } catch (error) {
        console.log(error)
      }
    }

    fetchFeaturedData()
    getCategories()
      .then((data) => {
        dispatch(setCategories(data))
      })
  }, [])

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      <Categories />
      {featuredCategories?.map((category) => (
        <FeaturedRow
          key={category._id}
          id={category._id}
          title={category.name}
          description={category.short_description}
        />
      ))}
    </ScrollView>
  )
}

export default HomeMain
