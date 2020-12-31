# 过程记录


## debug
1. webpack打包总是有关于css文件的错误
  [网上的解决办法](https://blog.csdn.net/u011944141/article/details/100164652)，主要是webpack.config.js的rules里面关于css的规则顺序写反了。必须是style-loader在前。
2. 好的