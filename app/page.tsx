import React from 'react'
import CategoriesList from '@/components/home/CategoriesList';
import PropertiesContainer from '@/components/home/PropertiesContainer';
import { Suspense } from 'react';
import LoadingCards from '@/components/card/LoadingCards';

export const dynamic = 'force-dynamic';

function HomePage({searchParams,}:{searchParams: { category?: string; search?: string };}) {

  return (
    <section>
      <CategoriesList category={searchParams.category} search={searchParams.search} />
      <Suspense fallback={<LoadingCards/>}>
        <PropertiesContainer category={searchParams.category} search={searchParams.search} />
      </Suspense> 
    </section>
  )
}

export default HomePage
