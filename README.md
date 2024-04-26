# lobe chat

本版本适配 [free-api](https://github.com/LLM-Red-Team) 全系列 ，并且同步最新的[lobe-chat](https://lobehub.com/zh/docs/self-hosting/environment-variables)版本

## 如何使用

### 一. 直接如下图在设置中输入
   - **key 密钥** ：free-api 系列的请求refresh_token
   - **接口地址**： free-api 系列的请求地址，一定要记得加**/v1**

![image](https://github.com/Yanyutin753/lobe-chat/assets/132346501/0ae32055-3fb0-4366-a6dc-a245c23b24d9)

### 二. 也可以直接加入到lobe-chat环境变量
  
```
version: '3' 

services:  
 lobe-chat:
    image: yangclivia/lobe-chat:latest
    container_name: lobe-chat
    restart: always
    network_mode: host  
    environment:
      OPENAI_API_KEY: key 密钥
      OPENAI_PROXY_URL: 接口地址
      ACCESS_CODE: 使用密码
```

  
### 三. 通过one-api使用

  - 1. 下载并安装[one-api](https://github.com/songquanpeng/one-api),并填好相应的渠道。
  - 2. 渠道的模型名，可以参照下面请求的到结果填写
       
```
# 8000 是 默认的free-api系列的端口，请替换成你自己的，并在自己的服务终端进行测试
curl http://127.0.0.1:8000/v1/models
```
  - 3. 按照lobe-chat，可以参照下面的docker-compose.yml格式
  
```
version: '3' 

services:  
 lobe-chat:
    image: yangclivia/lobe-chat:latest
    container_name: lobe-chat
    restart: always
    network_mode: host  
    environment:
      OPENAI_API_KEY: one-api密钥
      OPENAI_PROXY_URL: one-api接口地址
      ACCESS_CODE: 使用密码
```

  - 4. 之后点击设置，点击获取模型，之后挑选自己的模型即可


### 四. 更多lobe-chat设置

[lobe-chat的设置](https://lobehub.com/zh/docs/self-hosting/environment-variables)
