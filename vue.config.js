module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? 'public_html/spa-loft/dist/'
        : '/'
}
