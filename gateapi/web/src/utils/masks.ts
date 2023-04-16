export const moneyMask = (value) => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	})
	return formatter.format(value).replace(/[^\d.-]/g, '')
}
