// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import {VaccinationByAgeContainer, Heading} from './styledComponents'

const VaccinationByAge = props => {
  const {vaccinationByAge} = props

  return (
    <VaccinationByAgeContainer>
      <Heading>Vaccination by age</Heading>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            cx="70%"
            cy="40%"
            data={vaccinationByAge}
            startAngle={0}
            endAngle={360}
            dataKey="count"
            align="center"
          >
            <Cell name="18-44" fill="#2d87bb" />
            <Cell name="45-60" fill="#a3df9f" />
            <Cell name="Above 60" fill=" #64c2a6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </VaccinationByAgeContainer>
  )
}
export default VaccinationByAge
