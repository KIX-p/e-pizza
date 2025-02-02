import React, { FC } from 'react';
import { Title } from './title';
import { FilterCheckbox } from './FilterCheckbox';
import { Input } from '../ui';
import { RangeSlider } from './RangeSlider';
import CheckboxFiltersGroup from './CheckboxFiltersGroup';

interface FiltersProps {
  className?: string;
}

export const Filters: FC<FiltersProps> = ({ className }) => {
  return (
    <div className={className}>
        <Title text = "Filtruj" size = "sm" className="mb-5 font-bold"/>

        {/* Górne checkboxy */}
        <div className='flex flex-col gap-4'>
            <FilterCheckbox text = "Można zbierać" value = "1" />
            <FilterCheckbox text = "Nowości" value = "2" />
        </div>

        {/* filtr kwoty */}
        <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
            <p className='font-bold mb-3'>Cena od i do:</p>
            <div className='flex gap-3 mb-5'>
                <Input type="number" placeholder="0" min = {0} max = {30000} defaultValue = {0}/>
                <Input type="number" placeholder="30000" min = {100} max = {30000} />
            </div>

            <RangeSlider min = {0} max = {5000} step = {10} value = {[0, 5000]}/>

            <CheckboxFiltersGroup title={'Składniki'} 
            className='mt-5'
            limit={6}
            defaultItems={[
                {
                    text: 'Sos serowy',
                    value: '1',
                },
                {
                    text: 'Mozerella',
                    value: '2',
                },
                {
                    text: 'Czosnek',
                    value: '3',
                },
                {
                    text: 'Ogórki solone',
                    value: '4',
                },
                {
                    text: 'Czerwona cebula',
                    value: '5',
                },
                {
                    text: 'Pomidory',
                    value: '6',
                },
            ]}
            items={[
                {
                    text: 'Sos serowy',
                    value: '1',
                },
                {
                    text: 'Mozerella',
                    value: '2',
                },
                {
                    text: 'Czosnek',
                    value: '3',
                },
                {
                    text: 'Ogórki solone',
                    value: '4',
                },
                {
                    text: 'Czerwona cebula',
                    value: '5',
                },
                {
                    text: 'Pomidory',
                    value: '6',
                },
                {
                    text: 'Sos serowy',
                    value: '1',
                },
                {
                    text: 'Mozerella',
                    value: '2',
                },
                {
                    text: 'Czosnek',
                    value: '3',
                },
                {
                    text: 'Ogórki solone',
                    value: '4',
                },
                {
                    text: 'Czerwona cebula',
                    value: '5',
                },
                {
                    text: 'Pomidory',
                    value: '6',
                },
                {
                    text: 'Sos serowy',
                    value: '1',
                },
                {
                    text: 'Mozerella',
                    value: '2',
                },
                {
                    text: 'Czosnek',
                    value: '3',
                },
                {
                    text: 'Ogórki solone',
                    value: '4',
                },
                {
                    text: 'Czerwona cebula',
                    value: '5',
                },
                {
                    text: 'Pomidory',
                    value: '6',
                },
            ]}
            />
        </div>

    </div>
  );
};

export default Filters;