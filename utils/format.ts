
export const formatCurrency = (amount: number, countryCode: string, currencyCode: string): string => {
    return new Intl.NumberFormat(countryCode, {
        style: 'currency',
        currency: currencyCode,
        maximumFractionDigits: 0
    }).format(amount)
}