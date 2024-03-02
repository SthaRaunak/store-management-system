function formatCurrency(price) {
    const NepalRupees = new Intl.NumberFormat('en-NP',{
        style: 'currency',
        currency: 'NPR'
    });
    return NepalRupees.format(price);
}

export { formatCurrency };
