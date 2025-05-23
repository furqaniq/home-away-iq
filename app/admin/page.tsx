import ChartsContainer from '@/components/admin/ChartsContainer';
import { StatsLoadingContainer } from '@/components/admin/Loading';
import StatsContainer from '@/components/admin/StatsContainer';
import React, { Suspense } from 'react';


function AdminPage() {
  return (
    <>
      <Suspense fallback={<StatsLoadingContainer/>}>
       <StatsContainer />
      </Suspense>
      <Suspense fallback={<StatsLoadingContainer/>}>
       <ChartsContainer />
      </Suspense>
    </>
  )
}

export default AdminPage;
