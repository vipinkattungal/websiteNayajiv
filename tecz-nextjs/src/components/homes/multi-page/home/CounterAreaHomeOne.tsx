'use client'
import Count from '@/components/common/Count';
import React from 'react';

interface DataType {
  id: number;
  icon: string;
  counter_number: number;
  title: string;
}[]

const counter_data: DataType[] = [
  {
    id: 1,
    icon: "flaticon-project-management",
    counter_number: 3480,
    title: "Project Completed",
  },
  {
    id: 2,
    icon: "flaticon-consultant",
    counter_number: 428,
    title: "IT Specialist",
  },
  {
    id: 3,
    icon: "flaticon-project-management",
    counter_number: 6980,
    title: "Happy Clients",
  },
  {
    id: 4,
    icon: "flaticon-solution-1",
    counter_number: 256,
    title: "Smart Solution",
  },
]
const CounterAreaHomeOne = () => {
  return (
    <>
      <section className="counter-area tp-counter-overlay pb-140 p-relative">
        <div className="tp-counter-bg" style={{ backgroundImage: `url(/assets/img/counter/counter-bg-1.jpg)` }}></div>
        <div className="container">
          <div className="row">
            {counter_data.map((item, i) =>
              <div key={i} className="col-lg-3 col-md-3">
                <div className="tp-counter-item text-center mb-30">
                  <div className="tp-counter-item-icon">
                    <i className={item.icon}></i>
                  </div>
                  <div className="tp-counter-item-content">
                    <h3 className="tp-counter-item-count">
                      <span data-purecounter-duration="1" data-purecounter-end="3480"
                        className="purecounter"><Count number={item.counter_number} add_style={true} /></span>
                    </h3>
                    <p>{item.title}</p>
                  </div>
                </div>
              </div>
            )} 
          </div>
        </div>
      </section>
    </>
  );
};

export default CounterAreaHomeOne;