
## track
`<track>` 是媒体元素`<audio> 和 <video>`的子元素，允许指定时序文本字幕

`<track>` 元素是 空元素，所以开始标签必须存在，结束标记可以省略。

文本轨道会使你的网站更容易被搜索引擎抓取到 （SEO）， 由于搜索引擎的文本抓取能力非常强大，使用文本轨道甚至可以让搜索引擎通过视频的内容直接链接

属性：
1. default 该属性定义了该track应该启用
2. kind，可能的值：
    * subtitles：默认的 kind 值，字幕给观影者看不懂的内容提供了翻译；字幕可能包含额外的内容，通常有附加的背景信息
    * captions：隐藏式字幕提供了音频的转录甚至是翻译，可能包含重要的非言语的信息，比如音乐提示或者音效，适用于耳聋的用户或者当调成静音的时候
    * descriptions：视频内容的文本描述，适用于失明用户或者当视频不可见的场景
    * chapters：用于用户浏览媒体资源的时候
    * metadata：脚本使用的track。 对用户不可见
3. label：浏览器使用的text track的标题，这种标题是用户可读的
4. src：track的地址，该属性必须定义
5. srclang：track文本数据的语言，如果 kind 属性被设为 subtitles, 那么srclang 必须定义。

```html
<video controls>
    <source src="example.mp4" type="video/mp4">
    <source src="example.webm" type="video/webm">
    <track kind="subtitles" src="subtitles_en.vtt" srclang="en">
</video>

<!-- 一个media 元素的任意两个 track 子元素不能有相同的 kind, srclang, 和 label属性 -->
<video controls poster="/images/sample.gif">
   <source src="sample.mp4" type="video/mp4">
   <source src="sample.ogv" type="video/ogv">
   <track kind="captions" src="sampleCaptions.vtt" srclang="en">
   <track kind="descriptions"
     src="sampleDescriptions.vtt" srclang="en">
   <track kind="chapters" src="sampleChapters.vtt" srclang="en">
   <track kind="subtitles" src="sampleSubtitles_de.vtt" srclang="de">
   <track kind="subtitles" src="sampleSubtitles_en.vtt" srclang="en">
   <track kind="subtitles" src="sampleSubtitles_ja.vtt" srclang="ja">
   <track kind="subtitles" src="sampleSubtitles_oz.vtt" srclang="oz">
   <track kind="metadata" src="keyStage1.vtt" srclang="en"
     label="Key Stage 1">
   <track kind="metadata" src="keyStage2.vtt" srclang="en"
     label="Key Stage 2">
   <track kind="metadata" src="keyStage3.vtt" srclang="en"
     label="Key Stage 3">
   <!-- Fallback -->
   ...
</video>
```