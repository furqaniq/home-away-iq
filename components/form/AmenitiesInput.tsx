'use client';
import React from 'react';
import { useState } from 'react';
import { amenities, Amenity, conservativeAmenities } from '@/utils/amenities';
import { Checkbox } from '@/components/ui/checkbox';


function AmenitiesInput({defaultValue}:{defaultValue?:Amenity[]}) {

  // const amenitiesWithIcons = defaultValue?.map(({name, selected})=>{
  //   return {
  //     name, 
  //     selected, 
  //     icon: amenities.find(( amenity ) => amenity.name === name )!.icon,
  //   };
  // });

  const amenitiesWithIcons = defaultValue?.map(({ name, selected }) => {
    const foundAmenity = amenities.find((amenity) => amenity.name === name);
    return {
      name,
      selected,
      icon: foundAmenity ? foundAmenity.icon : null, // Use null or a default icon if not found
    };
  });

  const [selectedAmenities, setSelectedAmenities] = useState<Amenity[]>(defaultValue || conservativeAmenities);

  const handleChange = (amenity:Amenity) => {
    setSelectedAmenities((prev)=>{
        return prev.map((a)=> {
           if(a.name === amenity.name){
            return {...a, selected:!a.selected};
           } 
           return a;
        });
    });
  };

  return (
    <section>
      <input type="hidden" name='amenities' value={JSON.stringify(selectedAmenities)} />
      <div className='grid grid-cols-2 gap-4'>
        {selectedAmenities.map((amenity)=>{
            return <div key={amenity.name} className='flex items-center space-x-2'>
                <Checkbox id={amenity.name} checked={amenity.selected} onCheckedChange={()=> handleChange(amenity)}/>
                <label htmlFor={amenity.name} className='text-sm font-medium leading-none capitalize flex gap-x-2 items-center'>
                    {amenity.name}  
                    {amenity.icon && <amenity.icon className='w-4 h-4' />}
                    {/* <amenity.icon className='w-4 h-4'/>   */}
                </label>    
            </div>
        })}
      </div>
    </section>
  )
}

export default AmenitiesInput
