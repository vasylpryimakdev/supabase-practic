import PageTitle from '@/components/ui/page-title'
import React from 'react'
import PlanForm from '../_components/plan-form'

function AddPlanPage() {
  return (
    <div>
        <PageTitle title="Add Plan" />
        <PlanForm formType="add" 
         initialValues={null}
         />
    </div>
  )
}

export default AddPlanPage