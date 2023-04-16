import * as yup from 'yup'

export const formSchema = yup.object().shape({
	propertyName: yup.string().required('Please inform the property name'),
	address: yup.string().required('Inform the property address'),
	propertyType: yup.string().required('Choose a property type'),
	unitName: yup.string().required('Inform the unit name '),
	rentValue: yup.string().required('Inform the rent price'),
	depositValue: yup.string().required('Inform the deposit value'),
	availableOn: yup.string().required('Choose a date'),
	leaseLength: yup.string().required('Informe the Lease Length'),
	beds: yup.string().required('Bedrooms is required'),
	baths: yup.string().required('Inform the baths'),
	sqFt: yup.string().required('Inform the area in m²'),
	vacancy: yup.string().required('Vacancy is required'),
})
