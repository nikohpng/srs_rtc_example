# srs_rtc_example
this is srs rtc example, it will quick help you run rtc and comprehend it

这是一个srs rtc的示例代码，主要目的是快速学习rtc并理解它

## features

- [x] 录屏推流

## Usage
默认采用录屏推流，只需要配置如下配置即可
```js
// 此处push填入true为录屏推流，false或者不填将抓取摄像头
sdk.publish(url, true).then(function(session){
            $('#sessionid').html(session.sessionid);
            $('#simulator-drop').attr('href', session.simulator + '?drop=1&username=' + session.sessionid);
        }).catch(function (reason) {
            sdk.close();
            $('#rtc_media_player').hide();
            console.error(reason);
        });
```

