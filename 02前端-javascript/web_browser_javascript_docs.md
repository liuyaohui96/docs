
# web_browser_javascript_docs
1. [Window](#window)
    1. [Window继承WindowOrWorkerGlobalScope](#window继承windoworworkerglobalscope)
    2. [Window继承WindowLocalStorage](#window继承windowlocalstorage)
    3. [Window继承WindowSessionStorage](#window继承windowsessionstorage)
    4. [Window继承AnimationFrameProvider](#window继承animationframeprovider)
    5. [window继承GlobalEventHandlers](#window继承globaleventhandlers)
    6. [Window继承WindowEventHandlers](#window继承windoweventhandlers)
2. [DOM](#dom)
    1. [Node](#node)
    2. [Document](#document)
    3. [Element](#element)
        1. [DOMTokenList](#domtokenlist)
        2. [HTMLCollection](#htmlcollection)
    4. [HTMLElement](#htmlelement)
    5. [Event](#event)
        1. [EventTarget](#eventtarget)
        2. [事件流](#事件流)
        3. [事件处理程序](#事件处理程序)
        4. [事件委托](#事件委托)
3. [Blob](#blob)


## Window
```typescript
// 全局变量window是script代码运行所在的window
// window.document 就是Document对象
// 浏览器标签中，每一个tab都有自己的window
// ，不会共享一个 window 对象
// 存在属性和方法不仅改变标签，也改变多个标签的当前窗口
// 如`window.resizeBy()`这类
interface Window extends EventTarget, AnimationFrameProvider,
  GlobalEventHandlers, WindowEventHandlers, WindowLocalStorage,
  WindowOrWorkerGlobalScope, WindowSessionStorage {
  // 获取/设置当前窗口的名称
  name: string;
  // window是否关闭的名称
  readonly closed: boolean;


  //  === 引用其他重要对象
  // 浏览器
  readonly navigator: Navigator;
  // 返回screen对象
  readonly screen: Screen;
  // 返回/设置location
  get location(): Location;
  set location(href: string | Location);
  // 返回history
  readonly history: History;
  // 返回当前window
  readonly window: Window & typeof globalThis;
  // 返回当前document对象
  readonly document: Document;
  // 返回 console 对象的引用，
  // 该对象提供了对浏览器调试控制台的访问 
  readonly console: Console

  // 返回SpeechSynthesis对象
  // Web Speech API的入口
  readonly speechSynthesis: SpeechSynthesis;
  //  === end 引用其他重要对象

  // === 嵌入元素相关
  // window如果嵌入到其他文档
  // 返回嵌入到的element
  // 未嵌入到另一个文档
  // 嵌入的文档具有不同来源（如不同域）
  // 返回null
  readonly frameElement: Element | null;
  // 返回当前窗口的所有子框架元素的类数组对象
  readonly frames: WindowProxy;
  // 返回窗口中的 frames 数量
  readonly length: number;
  // 可以通过索引访问窗口
  // 在frames中返回widow对象的引用
  // window[0], window[1], etc
  [index: number]: Window;
  // === end 嵌入元素相关

  // === 窗口关系相关
  // 返回当前窗口的引用
  readonly self: Window & typeof globalThis;
  // 返回打开当前窗口的那个窗口的引用
  opener: any;
  // 返回当前窗口的直接父对象
  // 也可以是null，如iframe的内容窗口
  // 已经从父对象窗口移除
  readonly parent: WindowProxy;
  // 返回窗口层级最顶层窗口的引用
  readonly top: WindowProxy | null;
  // === end 窗口关系相关


  // === 窗口宽高相关
  // 浏览器窗口的内容区域的高度，包含水平滚动条
  readonly innerHeight: number;
  // 浏览器窗口的内容区域的宽度，包含垂直滚动条
  readonly innerWidth: number;
  // 浏览器窗口的外部高度
  // 包括所有的界面元素，如滚动条，工具条
  readonly outerHeight: number;
  // 浏览器窗口的外部宽度
  // 包括所有的界面元素，如滚动条，工具条
  readonly outerWidth: number;

  // 增/减当前window的x，y
  resizeBy(x: number, y: number): void;
  // 设置window的width & height
  resizeTo(width: number, height: number): void;
  // === end 窗口宽高相关


  // === 窗口屏幕位置相关
  // 浏览器窗口相对于屏幕左边的距离
  readonly screenX: number;
  // 浏览器窗口相对于屏幕左边的距离
  readonly screenLeft: number;
  // 浏览器窗口相对于屏幕顶部的距离
  readonly screenY: number;
  // 浏览器窗口相对于屏幕顶部的距离
  readonly screenTop: number;

  // 窗口移动指定的x，y
  moveBy(x: number, y: number): void;
  // 移动窗口到指定位置x，y
  moveTo(x: number, y: number): void;
  // === end 窗口屏幕位置相关


  // === 窗口滚动相关
  // 文档已经水平滚动的像素
  readonly scrollX: number;
  // 文档已经垂直滚动的像
  readonly scrollY: number;
  // 滚动到指定的x，y
  scroll(x: number, y: number): void;
  // 滚动增/减相应的x，y
  scrollBy(x: number, y: number): void;
  // 滚动到指定的x，y
  scrollTo(x: number, y: number): void;
  // ===  end 窗口滚动相关


  // === 工具栏相关
  // 状态栏是否可见
  readonly statusbar: BarProp;
  // 工具栏是否可见
  readonly toolbar: BarProp;
  // locationbar是否可见
  readonly locationbar: BarProp;
  // menubar是否可见
  readonly menubar: BarProp;
  // personalbar是否可见
  readonly personalbar: BarProp;
  // scrollbar是否可见
  readonly scrollbars: BarProp;
  // === end 工具栏相关


  // === 操作方法
  // 第一个可选参数url：指定url
  // 第二个可选参数target：指定target打开方式
  // 第三个可选参数feature：指定feature
  // 返回值：打开url指定的新窗口
  open(url?: string | URL, target?: string, features?: string): WindowProxy | null;
  // 取消document加载
  stop(): void;
  close(): void;
  focus(): void;
  blur(): void;

  // 将可选参数message显示在alert dialog中
  alert(message?: any): void;
  // 第一个可选参数message：指定message
  // 返回值：将message显示在dialog中，用户需要回应
  // 根据回应返回boolean值
  confirm(message?: string): boolean;
  // 第一个可选参数message：指定message
  // 第二个可选参数_default: 指定_default
  // 返回值：打开prompt提示窗口，窗口信息由message指定，
  // 输入文本，返回这个输入的文本
  prompt(message?: string, _default?: string): string | null;
  // 打开print dialog，输出当前document
  print(): void;

  // 返回Selection对象
  // 这个对象代笔被选中的item
  getSelection(): Selection | null;
  // 第一个参数elt：指定element
  // 第二个可选参数pseudoElt：
  // 返回指定elt的CSSStyleDeclaration
  getComputedStyle(elt: Element, pseudoElt?: string | null): CSSStyleDeclaration;


  // 第一个参数query：指定query字符串
  // 返回值：根据query字符串，返回匹配的MediaQueryList
  matchMedia(query: string): MediaQueryList;


  // 第一个参数message：可以是任意的值，如结构对象
  // 例如嵌套的对象，数组和包含数据对象的File Blob
  // & FileList & ArrayBuffer
  // 第二个参数targetOrigin：指定targetOrigin
  // 默认是'/'，即发送message限制再同一个origin
  // 如果targetOrigin不匹配，为了不让信息泄露
  // message会被舍弃
  // 发送message，不管哪个origin，可以设置为'*'
  // 描述：不需要在同一个domin，从一个window
  // 发送messsage字符串到另一个targetOrigin的
  // window
  postMessage(message: any, targetOrigin: string,
    transfer?: Transferable[]): void;
  postMessage(message: any, options?: WindowPostMessageOptions): void;


  // 第一个参数handle：指定数字handle
  // 取消Window.requestIdleCallback
  cancelIdleCallback(handle: number): void;
  // 第一个参数hanlder：指定handler
  // 第二个可选参数option：
  // 返回值：在浏览器闲置（idle）时间期间设置
  // 一个hanlder
  requestIdleCallback(callback: IdleRequestCallback,
    options?: IdleRequestOptions): number;
  // === end 操作方法


  // === 事件相关
  addEventListener<K extends keyof WindowEventMap>(type: K,
    listener: (this: Window, ev: WindowEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions): void;
  addEventListener(type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions): void;
  removeEventListener<K extends keyof WindowEventMap>(type: K,
    listener: (this: Window, ev: WindowEventMap[K]) => any,
    options?: boolean | EventListenerOptions): void;
  removeEventListener(type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions): void;
  // === 事件相关


  // === 其他
  // 返回VisualViewport对象
  // 代表窗口的可视化视口
  readonly visualViewport: VisualViewport;
  // 返回一个CustomElementRegistry对象
  // 可以用来注册自定义元素
  // 和获取之前注册的自定义元素的信息
  readonly customElements: CustomElementRegistry;
  // 返回物理像素和设备像素的比率（ratio）
  readonly devicePixelRatio: number;

  // 如果属性和方法不存在，从lib.dom.d.ts或其他更新文件中查找补充
}
```

[返回顶部](#web_browser_javascript_docs)


### Window继承WindowOrWorkerGlobalScope
```typescript
interface WindowOrWorkerGlobalScope {
  // 返回Performance对象
  // 该对象可用于收集有关当前文档的性能信息
  readonly performance: Performance;
  // 返回CacheStorage对象
  // 这个对象可以用于存储离线资源
  readonly caches: CacheStorage;
  // 返回IDBFactory对象
  // 提供异步访问index databases的能力
  readonly indexedDB: IDBFactory;
  readonly crossOriginIsolated: boolean;
  // 返回浏览器的crypto对象
  readonly crypto: Crypto;
  // 返回全局对象的origin，序列化为string
  readonly origin: string;
  // 判断当前环境是否安全
  readonly isSecureContext: boolean;

  // 第一个参数data：指定data字符串
  // 返回值：将一个已经被base64编码（encode）
  // 的data解码（decode）
  atob(data: string): string;
  // 第一个参数data：指定data字符串
  // 返回值：将一个data字符串，用base64编码（encode）
  btoa(data: string): string;

  
  // 第一个参数handler：设置handler
  // 第二个可选参数timeout：指定间隔时间
  // 后续参数
  // 返回值：设置一个定时器
  // 指定timeout间隔时间后，运行指定handler
  // 返回定时器的id
  setTimeout(handler: TimerHandler,
    timeout?: number, ...arguments: any[]): number;
  // 第一个可选参数id：指定id
  // 描述：setTimeout()
  clearTimeout(id?: number): void;
  // 第一个参数handler：设置handler
  // 第二个可选参数timeout：指定间隔时间
  // 后续参数
  // 返回值：设置一个定时器
  // 指定timeout间隔时间后，运行指定handler
  // 这个过程重复执行
  // 返回定时器的id
  setInterval(handler: TimerHandler,
    timeout?: number, ...arguments: any[]): number;
  // 第一个可选参数id：指定id
  // 描述：清除setInterval()
  clearInterval(id?: number): void;
  

  // 第一个参数image：指定ImageBitmapSource
  // 返回值：接收image指定的ImageBitmapSource
  // 返回一个ImageBitmap的promise
  createImageBitmap(image: ImageBitmapSource,
    options?: ImageBitmapOptions): Promise<ImageBitmap>;
  createImageBitmap(image: ImageBitmapSource,
    sx: number, sy: number, sw: number, sh: number,
    options?: ImageBitmapOptions): Promise<ImageBitmap>;

  // 第一个参数input：指定RequestInfo
  // 第二个可选参数RequestInfo：指定RequestInit
  // 返回值：开启一个从网络fetch资源的进程，
  // 返回一个promise响应
  fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
  queueMicrotask(callback: VoidFunction): void;
  // 第一个参数e：指定e
  // 描述：report指定e的eror
  reportError(e: any): void;

  // 如果属性和方法不存在，从lib.dom.d.ts或其他更新文件中查找补充
}
```


1. SetTimeout的实际延时比设定值更久，setTimeout()只是将事件插入了“任务队列”，必须等当前代码（执行栈）执行完，主线程才会去执行它指定的回调函数。要是当前代码消耗时间很长，也有可能要等很久，所以并没办法保证回调函数一定会在setTimeout()指定的时间执行。所以，setTimeout()的第二个参数表示的是最少时间，并非是确切时间。HTML5标准规定了 setTimeout() 的第二个参数的最小值不得小于4毫秒，如果低于这个值，则默认是4毫秒
2. setTimeout()回调函数中的this，运行在所在函数完全分离的执行环境，非严格模式下this指向window(或全局)对象，严格模式下指向undefined
3. 递归setTimeout()和setInterval()区别:
    * 递归setTimeout()保证执行之间的延迟相同，即再次运行之前等待相同的时间。递归使用setTimeout()时，每次迭代都可以在运行下一次迭代之前计算不同的延迟。换句话说，第二个参数的值可以指定在再次运行代码之前等待的不同时间
    * setInterval()选择的间隔包括执行代码所花费的时间，假设设置100ms,但代码运行需要40毫秒才能运行，则间隔最终只有60毫秒
4. 早期的动画循环，使用`setInterval()`方法控制所有动画。编写循环动画的关键是知道延迟时间多久才合适，一方面，循环时间必须足够短，动画才能平滑，另一方面，循环间隔足够长，才能确保浏览器有能力渲染产生变化。大多数浏览器显示器的刷新频率是60HZ，大概相当于每秒重绘60次，因此每次重绘时间大概需要`1000ms/60 = 17ms`, 因此循环间隔是17ms，重绘的动画是最平滑的

[返回顶部](#web_browser_javascript_docs)


### Window继承WindowLocalStorage
```typescript
interface WindowLocalStorage {
  // 返回localStorage对象
  readonly localStorage: Storage;
}
```

[返回顶部](#web_browser_javascript_docs)


### Window继承WindowSessionStorage
```typescript
interface WindowSessionStorage {
  readonly sessionStorage: Storage;
}
```

[返回顶部](#web_browser_javascript_docs)


### Window继承AnimationFrameProvider
```typescript
interface AnimationFrameProvider {
  // 取消requestAnimationFrame的callback
  cancelAnimationFrame(handle: number): void;
  // 第一个参数callback：指定callback
  // 返回值：设置一个循环动画，
  // 下一次重绘之前调用回调函数callback，
  // 返回ID
  requestAnimationFrame(callback: FrameRequestCallback): number;
}
```

1. `requestAniamtionFrame()` 不用管在什么环境下运行，以合适的帧率运行动画，setInterval并没有能够在设备上以最优的帧率运行，有时候会掉帧。若想在浏览器下次重绘之前继续更新下一帧动画，那么回调函数自身必须再次调用window.requestAnimationFrame()
2. 动画的平滑度直接取决于动画的帧率，帧率以每秒帧数（fps）为单位进行度量，数值越大，动画越平滑。大多数屏幕的刷新率为60HZ，这意味着1秒可以运行60帧（fps）。如果60HZ的机器要达到60FPS，则每帧动画代码运行的时间为（1000/60）约16.7ms。`requestAniamtionFrame()`会尽可能靠近60FPS这个值，尽可能做得最好，回调函数执行次数通常是每秒60次，但在大多数遵循W3C建议的浏览器中，回调函数执行次数通常与浏览器屏幕刷新次数相匹配
3. `requestAniamtionFrame()`与 `setInterval & setTimeout`时间间隔的区别
    * `setInterval & setTimeout` 需要手动设置时间间隔。大部分的电脑显示器的刷新频率是60HZ，也就是每秒钟重绘60次, 所以最平滑动画的最佳循环间隔是 1000ms / 60 ，约为16.7ms。setTimeout/setInterval 有一个显著的缺陷在于时间是不精确的, setTimeout/setInterval 只能保证延时或间隔不小于设定的时间。因为它们实际上只是把任务添加到了任务队列中，但是如果前面的任务还没有执行完成，它们必须要等待
    * `requestAniamtionFrame()`不用指定Interval，采用的是系统时间间隔，保持最佳绘制效率，不会因为间隔时间过短，造成过度绘制，增加开销；也不会因为间隔时间太长，使用动画卡顿不流畅，让各种网页动画效果能够有一个统一的刷新机制，从而节省系统资源，提高系统性能，改善视觉效果
4. `requestAniamtionFrame()`与 `setInterval & setTimeout`相比，编写动画的优点：
    * 不需要设置时间，采用系统时间间隔，能达到最佳的动画效果
    * 把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成
    * 运行在后台标签页或者隐藏的`<iframe>`里时，`requestAniamtionFrame()`会被暂停调用以提升性能和电池寿命（大多数浏览器中）
    * 浏览器自动进行优化
[返回顶部](#web_browser_javascript_docs)


### window继承GlobalEventHandlers
```typescript
interface GlobalEventHandlers {
  /**
   * Fires when the user aborts the download.
   * @param ev The event.
   */
  onabort: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
  onanimationcancel: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
  onanimationend: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
  onanimationiteration: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
  onanimationstart: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
  onauxclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /**
   * Fires when the object loses the input focus.
   * @param ev The focus event.
   */
  onblur: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
  /**
   * Occurs when playback is possible, but would require further buffering.
   * @param ev The event.
   */
  oncanplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  oncanplaythrough: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Fires when the contents of the object or selection have changed.
   * @param ev The event.
   */
  onchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Fires when the user clicks the left mouse button on the object
   * @param ev The mouse event.
   */
  onclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onclose: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Fires when the user clicks the right mouse button in the client area, opening the context menu.
   * @param ev The mouse event.
   */
  oncontextmenu: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  oncuechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Fires when the user double-clicks the object.
   * @param ev The mouse event.
   */
  ondblclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /**
   * Fires on the source object continuously during a drag operation.
   * @param ev The event.
   */
  ondrag: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  /**
   * Fires on the source object when the user releases the mouse at the close of a drag operation.
   * @param ev The event.
   */
  ondragend: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  /**
   * Fires on the target element when the user drags the object to a valid drop target.
   * @param ev The drag event.
   */
  ondragenter: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  /**
   * Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.
   * @param ev The drag event.
   */
  ondragleave: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  /**
   * Fires on the target element continuously while the user drags the object over a valid drop target.
   * @param ev The event.
   */
  ondragover: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  /**
   * Fires on the source object when the user starts to drag a text selection or selected object.
   * @param ev The event.
   */
  ondragstart: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  ondrop: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  /**
   * Occurs when the duration attribute is updated.
   * @param ev The event.
   */
  ondurationchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when the media element is reset to its initial state.
   * @param ev The event.
   */
  onemptied: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when the end of playback is reached.
   * @param ev The event
   */
  onended: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Fires when an error occurs during object loading.
   * @param ev The event.
   */
  onerror: OnErrorEventHandler;
  /**
   * Fires when the object receives focus.
   * @param ev The event.
   */
  onfocus: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
  onformdata: ((this: GlobalEventHandlers, ev: FormDataEvent) => any) | null;
  ongotpointercapture: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  oninput: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  oninvalid: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Fires when the user presses a key.
   * @param ev The keyboard event
   */
  onkeydown: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
  /**
   * Fires when the user presses an alphanumeric key.
   * @param ev The event.
   * @deprecated
   */
  onkeypress: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
  /**
   * Fires when the user releases a key.
   * @param ev The keyboard event
   */
  onkeyup: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
  /**
   * Fires immediately after the browser loads the object.
   * @param ev The event.
   */
  onload: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when media data is loaded at the current playback position.
   * @param ev The event.
   */
  onloadeddata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when the duration and dimensions of the media have been determined.
   * @param ev The event.
   */
  onloadedmetadata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when Internet Explorer begins looking for media data.
   * @param ev The event.
   */
  onloadstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onlostpointercapture: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  /**
   * Fires when the user clicks the object with either mouse button.
   * @param ev The mouse event.
   */
  onmousedown: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onmouseenter: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onmouseleave: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /**
   * Fires when the user moves the mouse over the object.
   * @param ev The mouse event.
   */
  onmousemove: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /**
   * Fires when the user moves the mouse pointer outside the boundaries of the object.
   * @param ev The mouse event.
   */
  onmouseout: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /**
   * Fires when the user moves the mouse pointer into the object.
   * @param ev The mouse event.
   */
  onmouseover: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /**
   * Fires when the user releases a mouse button while the mouse is over the object.
   * @param ev The mouse event.
   */
  onmouseup: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /**
   * Occurs when playback is paused.
   * @param ev The event.
   */
  onpause: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when the play method is requested.
   * @param ev The event.
   */
  onplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when the audio or video has started playing.
   * @param ev The event.
   */
  onplaying: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onpointercancel: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointerdown: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointerenter: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointerleave: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointermove: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointerout: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointerover: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointerup: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  /**
   * Occurs to indicate progress while downloading media data.
   * @param ev The event.
   */
  onprogress: ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null;
  /**
   * Occurs when the playback rate is increased or decreased.
   * @param ev The event.
   */
  onratechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Fires when the user resets a form.
   * @param ev The event.
   */
  onreset: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onresize: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
  /**
   * Fires when the user repositions the scroll box in the scroll bar on the object.
   * @param ev The event.
   */
  onscroll: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onsecuritypolicyviolation: ((this: GlobalEventHandlers, ev: SecurityPolicyViolationEvent) => any) | null;
  /**
   * Occurs when the seek operation ends.
   * @param ev The event.
   */
  onseeked: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when the current playback position is moved.
   * @param ev The event.
   */
  onseeking: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Fires when the current selection changes.
   * @param ev The event.
   */
  onselect: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onselectionchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onselectstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onslotchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when the download has stopped.
   * @param ev The event.
   */
  onstalled: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onsubmit: ((this: GlobalEventHandlers, ev: SubmitEvent) => any) | null;
  /**
   * Occurs if the load operation has been intentionally halted.
   * @param ev The event.
   */
  onsuspend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs to indicate the current playback position.
   * @param ev The event.
   */
  ontimeupdate: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  ontoggle: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  ontouchcancel?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
  ontouchend?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
  ontouchmove?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
  ontouchstart?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
  ontransitioncancel: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
  ontransitionend: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
  ontransitionrun: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
  ontransitionstart: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
  /**
   * Occurs when the volume is changed, or playback is muted or unmuted.
   * @param ev The event.
   */
  onvolumechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when playback stops because the next frame of a video resource is not available.
   * @param ev The event.
   */
  onwaiting: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /** @deprecated This is a legacy alias of `onanimationend`. */
  onwebkitanimationend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /** @deprecated This is a legacy alias of `onanimationiteration`. */
  onwebkitanimationiteration: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /** @deprecated This is a legacy alias of `onanimationstart`. */
  onwebkitanimationstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /** @deprecated This is a legacy alias of `ontransitionend`. */
  onwebkittransitionend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onwheel: ((this: GlobalEventHandlers, ev: WheelEvent) => any) | null;
  addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: GlobalEventHandlers, ev: GlobalEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
  addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
  removeEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: GlobalEventHandlers, ev: GlobalEventHandlersEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
  removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
```

[返回顶部](#web_browser_javascript_docs)


### Window继承WindowEventHandlers
```typescript
interface WindowEventHandlers {
  onafterprint: ((this: WindowEventHandlers, ev: Event) => any) | null;
  onbeforeprint: ((this: WindowEventHandlers, ev: Event) => any) | null;
  onbeforeunload: ((this: WindowEventHandlers, ev: BeforeUnloadEvent) => any) | null;
  ongamepadconnected: ((this: WindowEventHandlers, ev: GamepadEvent) => any) | null;
  ongamepaddisconnected: ((this: WindowEventHandlers, ev: GamepadEvent) => any) | null;
  onhashchange: ((this: WindowEventHandlers, ev: HashChangeEvent) => any) | null;
  onlanguagechange: ((this: WindowEventHandlers, ev: Event) => any) | null;
  onmessage: ((this: WindowEventHandlers, ev: MessageEvent) => any) | null;
  onmessageerror: ((this: WindowEventHandlers, ev: MessageEvent) => any) | null;
  onoffline: ((this: WindowEventHandlers, ev: Event) => any) | null;
  ononline: ((this: WindowEventHandlers, ev: Event) => any) | null;
  onpagehide: ((this: WindowEventHandlers, ev: PageTransitionEvent) => any) | null;
  onpageshow: ((this: WindowEventHandlers, ev: PageTransitionEvent) => any) | null;
  onpopstate: ((this: WindowEventHandlers, ev: PopStateEvent) => any) | null;
  onrejectionhandled: ((this: WindowEventHandlers, ev: PromiseRejectionEvent) => any) | null;
  onstorage: ((this: WindowEventHandlers, ev: StorageEvent) => any) | null;
  onunhandledrejection: ((this: WindowEventHandlers, ev: PromiseRejectionEvent) => any) | null;
  onunload: ((this: WindowEventHandlers, ev: Event) => any) | null;
  addEventListener<K extends keyof WindowEventHandlersEventMap>(type: K, listener: (this: WindowEventHandlers, ev: WindowEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
  addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
  removeEventListener<K extends keyof WindowEventHandlersEventMap>(type: K, listener: (this: WindowEventHandlers, ev: WindowEventHandlersEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
  removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
```

[返回顶部](#web_browser_javascript_docs)


## DOM
1. DOM描述：文档对象模型 (Document Object Model)是HTML和XML文档的编程接口
2. 文档中的每一个元素，文档对象模型（DOM）的一部分。DOM 被设计成与特定编程语言相独立，编程语言通过DOM提供的一致的API就可以实现DOM的操作。

DOM的核心API包括
1. `Node` interface ：Document和Element 都继承了Node接口，Node接口提供更一般的属性和方法，Node接口又继承了EventTarget接口，EventTarget接口定义了事件监听器相关方法
2. `Document` interface： 修改文档的相关属性，访问文档内部的相关节点，都需要使用Document接口，它表示DOM tree
3. `Element` interface & `HTMLElement` interface：文档内部的节点操作，大部分都是在元素节点上进行操作，无论哪一个元素，他们都实现了通用的HTMLElement接口，HTMLElement接口继承了Element接口
  * Element继承了Node interface
  * Element继承了ParentNode interface
  * Element继承了ChildNode interface

> javascript操作DOM，本质上是 JS 引擎和渲染引擎之间进行了“跨界交流”，依赖于接口操作，DOM操作过多，就会产生比较明显的性能问题。因此就有了“减少 DOM 操作”的建议

[返回顶部](#web_browser_javascript_docs)


### Node
```typescript
// 很多DOM API对象类型，如Document，Element，DocumentFragment
// 都继承了Node接口
// NODE是一个抽象基础类，所以没有plain Node Object
// 
interface Node extends EventTarget {
  // === 节点类型
  // 返回节点类型
  // 仅列举常用的
  // `ELEMENT_NODE` `1`； `ATTRIBUTE_NODE` `2` 
  // `TEXT_NODE`  `3`；`COMMENT_NODE`  `8` 
  // `DOCUMENT_NODE` `9` 
  readonly nodeType: number;

  // node的字符串名称
  // HTMLElement 返回对应Element.tagName，如'audio'
  // attribute node：返回attribute.name
  // text节点返回"#text"
  // Comment: "#comment"
  // document 节点返回`'#document'`字符串
  readonly nodeName: string;
  
  // Element： null
  // Attr： 该属性的属性值
  // Text： 文本节点的内容
  // Comment：注释的文本内容
  // Document： null
  nodeValue: string | null;
  
  // 如果节点是document，返回null
  // document内容使用documentElement.textContent
  // element节点，所有子节点的 textContent合并后返回
  // 文本节点和注释节点返回对应内容
  textContent: string | null;
  // === end节点类型


  // === 节点关系
  // parent child ancestor(祖先) descendant(后代)
  // silbing（兄弟） adjacent silbing(紧邻兄弟节点)
  // 返回当前节点的document，如果节点本身
  // 是document，返回null
  readonly ownerDocument: Document | null;
  /** Returns the parent element. */
  // 返回当前节点父节点
  readonly parentNode: ParentNode | null;
  // 返回节点内的若干孩子NodeList
  readonly childNodes: NodeListOf<ChildNode>;
  // 返回当前节点的父element，如果没有父亲
  // 或者没有父亲不是element，返回null
  readonly parentElement: HTMLElement | null;

  // 返回节点内第一个孩子
  readonly firstChild: ChildNode | null;
  /** Returns the last child. */
  readonly lastChild: ChildNode | null;

  // 返回下上一个兄弟节点，没有则返回null
  readonly previousSibling: ChildNode | null;
  // 返回下一个兄弟节点，没有则返回null
  readonly nextSibling: ChildNode | null;


  // 返回node的根节点
  getRootNode(options?: GetRootNodeOptions): Node;
  // 增加子节点作为节点内的最后一个孩子
  // 如果插入节点是现有节点的引用，回先在原来
  // 节点的父节点内删除，然后再添加到新位置
  appendChild<T extends Node>(node: T): T;
  // 返回值：节点内找到对应的child，删除
  // 返回这个删除的child
  removeChild<T extends Node>(child: T): T;
  // 第一个参数node：指定node
  // 第二个参数child：指定child
  // 返回值：节点内找到child，将他替换为node
  replaceChild<T extends Node>(node: Node, child: T): T;
  // 第一个参数node：指定的node
  // 第二个参数child：指定child
  // 返回值：节点内，找到child，在child前面插入node
  // 返回插入的node
  insertBefore<T extends Node>(node: T, child: Node | null): T;

  // 判断是否有孩子节点
  hasChildNodes(): boolean;
  // 判断后代是否有相应的子节点
  contains(other: Node | null): boolean;

  // 返回值：当前节点与otherNode参数指定的节点是否有相同属性
  isEqualNode(otherNode: Node | null): boolean;
  // 返回值：当前节点与otherNode参数指定的节点的引用是否相同
  isSameNode(otherNode: Node | null): boolean;
  // === end 节点关系


  // 返回document的基础URL字符串
  readonly baseURI: string;

  // === 其他方法
  // 第一个可选参数deep：指定是否深拷贝
  // 返回值：返回拷贝节点，如果deep是true，则拷贝节点后代
  cloneNode(deep?: boolean): Node;
  // 删除节点内空的文本节点
  // 合并相邻文本节点
  // 当前节点和它的后代节点规范化
  // 规范化后不存在一个空的文本节点，
  // 或者两个相邻的文本节点
  normalize(): void;

  // 如果属性和方法不存在，从lib.dom.d.ts或其他更新文件中查找补充
}
```

[返回顶部](#web_browser_javascript_docs)

### Document

[返回顶部](#web_browser_javascript_docs)


### Element
```typescript
// `Document`下所有对象继承自Element
// Element继承了`Node & ParentNode & ChildNode`等interface
interface Element extends Node, ARIAMixin, Animatable, ChildNode,
  InnerHTML, NonDocumentTypeChildNode, ParentNode, Slottable {
  // === 继承自ParentNode的属性和方法
  // 用于操作子element

  // 返回element中的child element的数量
  readonly childElementCount: number;
  // 返回一个包含所有child element的HTMLCollection
  // 这是一个类数组对象
  readonly children: HTMLCollection;
  // 返回element中的第一个是element的child
  // 没有子element，返回null
  readonly firstElementChild: Element | null;
  // 返回element中的最后一个是element的child
  // 没有子element，返回null
  readonly lastElementChild: Element | null;

  // 接收若干个参数指定若干个node | string
  // 描述：将若干个指定的node插入到element中最后一个
  // child node之后，如果是string
  // 相当于插入text节点
  // 注意与Node.appendChild的区别，主要在于Node.appendChilde()
  // 只接收一个参数，且参数必须是node，而且返回这个插入的Node
  append(...nodes: (Node | string)[]): void;
  // 接收若干个参数指定若干个node | string
  // 描述：将若干个指定的node插入到element中
  // 第一个子节点之前，如果是string
  // 相当于插入text节点
  prepend(...nodes: (Node | string)[]): void;

  // 接收若干个参数指定若干个node | string
  // 描述：将若干个指定的node替换element内的孩子
  // 如果是string，相当于替换text node
  replaceChildren(...nodes: (Node | string)[]): void;

  // 第一个参数selector：指定selector
  // 返回值：返回element内匹配selector的第一个element
  querySelector<E extends Element = Element>(selectors: string): E | null;
  // 第一个参数selector：指定selector
  // 返回值：返回element内匹配selector的所有element
  querySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E>;

  // === end 继承自ParentNode的属性和方法


  // === 继承自childNode的方法
  // 主要用于当前节点的操作

  // 接收若干个参数指定若干个node | string
  // 将若干个指定的node插入到当前element前
  // 如果是string，相当于插入text node
  before(...nodes: (Node | string)[]): void;
  // 接收若干个参数指定若干个node | string
  // 将若干个指定的node插入到当前element后
  // 如果是string，相当于插入text node
  after(...nodes: (Node | string)[]): void;
  // 从element属于的树中删除element本身
  remove(): void;
  // 接收若干个参数指定若干个node | string
  // 将若干个指定的node替换当前的element
  // 如果是string，相当于替换text node
  replaceWith(...nodes: (Node | string)[]): void;
  // === end 继承自childNode的方法


  // === 元素查找相关
  // 返回大写的HTML标签名
  readonly tagName: string;

  // 第一个参数classNames：解释为space-separated的字符串类名
  // 返回值：element组成的HTMLCollection
  // 调用这个方法的对象（document | element）中有指定类名的element
  // 将这些放到HTMLCollection中返回
  getElementsByClassName(classNames: string): HTMLCollectionOf<Element>;
  // 同上，第一个参数为element的字符串类型
  getElementsByTagName(qualifiedName: string): HTMLCollectionOf<Element>;
  // === end 元素查找相关


  // === 属性操作相关
  // 返回NamedNodeMap，以字符串形式的name/value保存元素上的属性
  readonly attributes: NamedNodeMap;

  // 第一个参数：接收字符串属性名
  // 返回值：返回属性值，找不到返回null
  getAttribute(qualifiedName: string): string | null;
  // 返回字符串数组，包含element所有的属性名，属性名可能重复
  getAttributeNames(): string[];

  // 第一个参数：接收字符串属性名
  // 返回值：true则找到属性，否则false
  hasAttribute(qualifiedName: string): boolean;
  /** Returns true if element has attributes, and false otherwise. */
  // element是否有属性，有则true，否则false
  hasAttributes(): boolean;

  /** Removes element's first attribute whose qualified name is qualifiedName. */
  // 第一个参数：接收字符串属性名
  // 移除第一个匹配的属性
  removeAttribute(qualifiedName: string): void;

  // 第一个参数：接收字符串属性名
  // 第二个参数：指定属性值
  // 为元素的第一个该属性设置值，不存在该属性，则新增一个
  setAttribute(qualifiedName: string, value: string): void;

  // 第一个参数：接收字符串属性名
  // 第二个参数：可选的，true | false
  // 如果没有第二个参数，如果属性存在则删除，不存在则增加
  // 如果第二个参数是true，用于增加属性
  // 如果第二个参数是false，用于移除属性
  toggleAttribute(qualifiedName: string, force?: boolean): boolean;
  // ===end 属性操作相关

  // === 类属性相关
  // 返回一个DOMTokenList对象，对象里是whitespace-separted token
  // 通过操作DOMTokenList，处理element的class属性
  readonly classList: DOMTokenList;
  // 返回element的class属性，是可写属性
  className: string;

  // 返回element的id属性，是可写属性
  id: string;
  // === end 类属性相关


  // === 元素位置大小相关
  // content可见高度+padding height，不包括滚动条
  readonly clientHeight: number;
  // content可见宽度+padding，不包括滚动条
  readonly clientWidth: number;

  readonly clientLeft: number; // left border width
  readonly clientTop: number; // top border width

  // content高度+padding height，包括溢出不可见的高度
  readonly scrollHeight: number;
  // content宽度+padding width，包括溢出不可见的宽度
  readonly scrollWidth: number;

  // 元素从左边缘滚动的像素
  scrollLeft: number;
  // 元素从上边缘滚动的像素
  // 元素滚到底部，ScrollTop + clientHeight = scrollHeight
  scrollTop: number;

  // 接收两个参数，分别指定横纵坐标，滚动到指定的坐标
  scroll(x: number, y: number): void;
  // 接收两个参数，指定相对滚动的横纵坐标
  scrollTo(x: number, y: number): void;
  // 接收两个参数，指定相对滚动的横纵坐标
  scrollBy(x: number, y: number): void;

  // 接收一个option对象，里面可以指定left，top，smooth等属性
  scroll(options?: ScrollToOptions): void;
  // 接收一个option对象，里面可以指定left，top，smooth等属性
  scrollTo(options?: ScrollToOptions): void;
  // 接收一个option对象，里面可以指定left，top，smooth等属性
  scrollBy(options?: ScrollToOptions): void;

  // 接收一个boolean的可选参数
  // true，元素的顶端将和所在滚动区的可视区域的顶端对齐
  // false，元素的底端将和其所在滚动区的可视区域的底端对齐
  scrollIntoView(arg?: boolean | ScrollIntoViewOptions): void;

  // 返回一个DOMRect，对象包含了元素相当于viewport的元素大小（size）的属性
  // 视窗左上角为(0,0)，对象包含了以下属性
  // x/left | y/top | right | bottom | width | height
  // width height无论box-sizing是content-box还是border-box
  // 都会返回content + padding + border
  getBoundingClientRect(): DOMRect;
  // === end 元素位置大小相关


  // === 事件监听相关
  addEventListener<K extends keyof ElementEventMap>(type: K,
    listener: (this: Element, ev: ElementEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions): void;

  addEventListener(type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions): void;

  removeEventListener<K extends keyof ElementEventMap>(type: K,
    listener: (this: Element, ev: ElementEventMap[K]) => any,
    options?: boolean | EventListenerOptions): void;

  removeEventListener(type: string,
    listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
  // === end 事件监听相关

  // 如果属性和方法不存在，从lib.dom.d.ts中查找补充
}
```

[返回顶部](#web_browser_javascript_docs)


#### DOMTokenList
```typescript
// 存储 space-separated token的一个set
// 以下都会返回DOMTokenList：
// Element.classList, HTMLLinkElement.relList, HTMLAnchorElement.relList, 
// HTMLAreaElement.relList, HTMLIframeElement.sandbox, or HTMLOutputElement.htmlFor
// 这是一个索引从0开始的类数组对象
interface DOMTokenList {
  // DOMTokenList中的属性是number，属性值是字符串
  [index: number]: string;

  // 返回DOMTokenList长度
  readonly length: number;

  // 将DOMTokenList 这个set转换为string
  value: string;
  toString(): string;


  // 以下方法，如果方法参数的token
  // 是空字符串，抛出 "SyntaxError"
  // 包含了ASCII whitespace，抛出"InvalidCharacterError"

  // 访问token
  // 接收一个index参数，返回相应的token
  item(index: number): string | null;
  // 增加token
  // 接收若干个字符串，除非已经存在，将这些参数添加到DOMTokenList
  add(...tokens: string[]): void;
  // 移除token
  // 接收若干个字符串，如果存在，把他们移除
  remove(...tokens: string[]): void;
  // 替换token
  // 用第二个参数指定的newToken替换第一个参数指定token
  replace(token: string, newToken: string): boolean;
  // 第一个参数指定的的string类型的token，是否存在
  contains(token: string): boolean;
  // 第一个参数：指定字符串类型的token
  // 第二个参数：可选的boolean值
  // 如果第二个参数不给出，token存在则移除，不存在则添加
  // 如果第二个参数是true，则只添加token，相当于add()
  // 如果第二个参数是flase，则只删除token，相当于remove()
  toggle(token: string, force?: boolean): boolean;
  // 迭代方法
  forEach(callbackfn: (value: string, key: number, parent: DOMTokenList) => void, thisArg?: any): void;

  // 如果属性和方法不存在，从lib.dom.d.ts中查找补充
}
```

[返回顶部](#web_browser_javascript_docs)


#### HTMLCollection
```typescript
// generic collection，
// array-like object of elements
interface HTMLCollectionBase {
  // length属性
  readonly length: number;
  // 根据index方法参数获取一个element对象
  item(index: number): Element | null;
  // index形式访问
  [index: number]: Element;
}
```

[返回顶部](#web_browser_javascript_docs)



### HTMLElement
```typescript
// HTMLElement interface代表了html element
// HTMLElement -> Element -> Node -> EventTarget
interface HTMLElement extends Element, DocumentAndElementEventHandlers,
  ElementCSSInlineStyle, ElementContentEditable,
  GlobalEventHandlers, HTMLOrSVGElement {
  // === extends from ElementCSSInlineStyle
  // 返回element内联style属性
  // 不包括其内联样式表和外部样式表
  // 获取元素所有css属性，使用`getComputedStyle()`
  readonly style: CSSStyleDeclaration;
  // === end extends from ElementCSSInlineStyle


  // === extends from  ElementContentEditable
  // 元素是否是可编辑
  contentEditable: string;
  // 虚拟键盘enter键的Hint
  enterKeyHint: string;
  // 返回元素是否是可编辑
  readonly isContentEditable: boolean;
  // === end extends from  ElementContentEditable


  // 鼠标移到节点上时
  // （tool tip）的弹出形式显示
  title: string;
  // 当前元素的tab键激活顺序
  // 接收正整数，tab从小到大激活
  tabIndex: number;
  // 是否隐藏元素
  hidden: boolean;
  // 节点及其后代的渲染文本内容
  // 和Node.textContent是不一样的
  // innerText会过滤一些标签（如style，
  // dispaly:none的标签）
  // 只返回渲染的文本内容
  innerText: string;

  // 获得element上前缀是`data-*`的属性
  // dataset中的属性和`data-*`html属性自动转换
  // 如html属性转dataset属性：
  // 1. data-前缀自动去除
  // 2. 去除前缀-，转换为大写，cammelCase
  // e.g. dataset.abcDef => data-abc-def
  readonly dataset: DOMStringMap;

  // === 偏移属性
  // offsetWidth = content+pdding+border+滚动条
  readonly offsetWidth: number;
  // offsetHeight = content+pdding+border+滚动条
  readonly offsetHeight: number;

  // 返回一个最近的包含该元素的定位元素
  readonly offsetParent: Element | null;
  // 元素相对于offsetParent的top内边距的距离
  readonly offsetLeft: number;
  // 元素相对于offsetParent的left内边距的距离
  readonly offsetTop: number;
  // === end 偏移属性

  // === 方法
  // 模拟鼠标左键单击一个元素
  click(): void;
  // 元素获取键盘焦点
  focus(): void;
  // 清除键盘焦点
  blur(): void;

  // === 事件监听
  addEventListener<K extends keyof HTMLElementEventMap>(type: K,
    listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions): void;
  addEventListener(type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions): void;
  removeEventListener<K extends keyof HTMLElementEventMap>(type: K,
    listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
    options?: boolean | EventListenerOptions): void;
  removeEventListener(type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions): void;


  // === 其他
  accessKey: string;
  readonly accessKeyLabel: string;
  autocapitalize: string;
  dir: string;
  draggable: boolean;
  lang: string;
  outerText: string;
  spellcheck: boolean;

  translate: boolean;
  attachInternals(): ElementInternals;

  // 如果属性和方法不存在，从lib.dom.d.ts或其他更新文件中查找补充
}
```

[返回顶部](#web_browser_javascript_docs)

### Event


[返回顶部](#web_browser_javascript_docs)


#### EventTarget
```typescript
// eventTarget由可接收events及其listener的对象实现
// Element及其孩子，Document，Window都是常见的的EventTarget
interface EventTarget {
  // 为EventTarget指定类型添加事件监听器
  // 第一个参数type：监听的事件类型
  // 第二个参数callback：事件监听器
  // 第三个可选参数options：
  // 描述: 当eventtarget上指定的type发生，callback被调用
  addEventListener(type: string,
    //callback 中的第一个参数是事件对象event
    callback: EventListenerOrEventListenerObject | null,
    // options 是一个对象，有以下可选属性：
    // capture：默认是false
    // true则该类型的事件捕获阶段传播到该 EventTarget 时触发
    // once：默认是false
    // true则监听器最多触发一次
    // passive：true则监听器内用于不会调用preventDefault()
    options?: AddEventListenerOptions | boolean): void;

  // 移除eventTarget上的事件监听器
  // 需要指定相同的type，callback，option才能移除
  removeEventListener(type: string,
    callback: EventListenerOrEventListenerObject | null,
    options?: EventListenerOptions | boolean): void;

  // 第一个参数event：指定要派发的事件名称
  // 返回值：如果event's cancelable属性是false
  // 或者event 的preventDefault()没有被调用
  // 返回true， 其他情况返回false
  // 注意：浏览器原生事件由DOM派发，通过
  // event loop异步调用事件处理程序
  // dispatchEvent()则是同步调用事件处理程序
  dispatchEvent(event: Event): boolean;
  
  // 如果属性和方法不存在，从lib.dom.d.ts中查找补充
}
```

[返回顶部](#web_browser_javascript_docs)

#### 事件流
事件流描述的是页面元素接收事件的顺序。早期，IE浏览器采用事件冒泡事件流，而Netscape采用的则是事件捕获流。"DOM2级事件"把事件流分为三个阶段:
1. 捕获阶段。最外层元素层层到目标元素响应事件
2. 目标阶段。目标元素响应事件，并在事件处理中被看成冒泡阶段的一部分
3. 冒泡阶段。目标元素到最外层响应事件

> `addEventListener()`默认是在冒泡阶段触发事件，方法的第三个参数是options对象，对象中属性`capture`默认为false，如果指定`capture`为true，则在捕获阶段触发事件


[返回顶部](#web_browser_javascript_docs)

#### 事件处理程序
响应某个事件的函数就叫做事件处理程序（或事件侦听器，eventHandler | eventListener），可以分为：
1. 在HTML上定义的事件处理程序
2. DOM0级事件处理程序：
    * 同样的事件目标绑定多个监听同样的事件
    * 事件处理程序最后一个覆盖前面的。不能设置捕获和冒泡哪个优先。
3. DOM2级事件处理程序，由EventTarget接口定义的`addEventListener() & removeEventListener()`实现
    * 可以为相同的事件目标监听多个同样的事件
    * 事件处理程序依次执行。
    * 通过 addEventListener()添加的事件处理程序只能使用removeEventListener()来移除；
    * 移除时传入的参数与添加处理程序时使用的参数相同，这也意味着通过addEventListener()添加的匿名函数将无法移除


```js
// HTML事件处理程序
// 使用一个与相应事件处理程序同名的 HTML 特性来指定
/*
缺点： 
1. 如果用户在解析js事件处理函数前就触发了事件，就会引发错误
2. js代码和html代码紧密耦合在一起
*/
<input onclick="alert('Clicked')" /> 
<input onclick="showMessage()" />


// === DOM0级处理程序
var btn = document.getElementById("myBtn");
btn.onclick = function(){
 alert("Clicked");
}; 
// JS代码运行以前不会指定事件处理程序
btn.onclick = null; //删除事件处理程序

// === 例子1
element.addEventListener("mousedown", handleMouseDown, true);
// Fails
element.removeEventListener("mousedown", handleMouseDown, false);     
// Succeeds
element.removeEventListener("mousedown", handleMouseDown, true);      

// === 例子2
element.addEventListener("mousedown", handleMouseDown, { passive: true });
// Succeeds
element.removeEventListener("mousedown", handleMouseDown, { passive: true });     
// Succeeds
element.removeEventListener("mousedown", handleMouseDown, { capture: false });  
// Fails 
element.removeEventListener("mousedown", handleMouseDown, { capture: true });
// Succeeds     
element.removeEventListener("mousedown", handleMouseDown, { passive: false });    
// Succeeds
element.removeEventListener("mousedown", handleMouseDown, false);                
 // Fails 
element.removeEventListener("mousedown", handleMouseDown, true); 
```

[返回顶部](#web_browser_javascript_docs)


#### 事件委托
事件委托又叫事件代理，利用事件冒泡原理，为外层父容器添加事件处理程序，若内层子元素出发了事件，冒泡到该外层父容器进行处理。优点：
1. 减少内存消耗，提高性能：只需要一个父元素的事件处理程序，而不必为每个后代都添加事件处理程序，减少注册事件的个数
2. 动态绑定事件：如果子孙元素是动态增加的，不需要再次进行事件绑定；不用担心绑定了事件处理程序的DOM元素移除后，可能无法回收其事件处理程序

> 阻止事件冒泡的办法就是使用event.stopPropagation()，在IE<9的浏览器上使用event.cancelBubble。

[返回顶部](#web_browser_javascript_docs)


## Blob
```typescript
// 不可改变的，原生数据的文件对象
// File API是基于Blob
interface Blob {
  // Blob对象的size，使用byte表示
  readonly size: number;
  // 返回一个Blob对象包含的data的MIME类型
  // 用字符串表示
  readonly type: string;

  // 返回一个string promise
  // 包括blob对象作为UTF-8文本的全部内容
  text(): Promise<string>;
  // 返回一个ArrayBuffer 的promise
  // 包括blob对象作为二进制数据的全部内容
  arrayBuffer(): Promise<ArrayBuffer>;

  // 第一个可选参数start：指定start
  // 第二个可选参数end：指定end
  // 第三个可选参数contentType：指定contentType
  // 返回值：返回从start到end（不包括end）的Blob
  slice(start?: number, end?: number, contentType?: string): Blob;
  // 返回一个blob对象的ReadableStream
  // 可以用来读取blob对象的内容
  stream(): ReadableStream;

}

declare var Blob: {
  prototype: Blob;
  // 构造方法
  // 第一个可选参数blobParts：数组，数组内可以是
  // string | Blob | BufferSource
  // 第二个可选参数options：包括可选的endings属性，值
  // 是"native" | "transparent"，可选的type，属性值是字符串
  new(blobParts?: BlobPart[], options?: BlobPropertyBag): Blob;
};
```

[返回顶部](#web_browser_javascript_docs)


