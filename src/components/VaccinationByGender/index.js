// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import {VaccinationByGenderContainer, Heading} from './styledComponents'

const VaccinationByGender = props => {
  const {vaccinationByGender} = props

  return (
    <VaccinationByGenderContainer>
      <Heading>Vaccination by gender</Heading>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            cx="70%"
            cy="40%"
            data={vaccinationByGender}
            startAngle={0}
            endAngle={180}
            dataKey="count"
            align="center"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </VaccinationByGenderContainer>
  )
}
export default VaccinationByGender
