import React from 'react';
import Swiper from 'swiper';
import { getSlideList } from '../../../service/home/index';
import './index.scss';
import 'swiper/css/swiper.min.css'

class IndexComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      slideList: []
    }
  }

  componentDidMount() {
    this.getInitSweiper();
  }

  getInitSweiper() {
    getSlideList().then(data => {
      this.setState({ slideList: data }, () => {
        this.mySwiper = new Swiper('.swiper-container', {
          autoplay: true,
          pagination: '.swiper-pagination',
        });
      })
    })
  }

  render() {
    return (
      <div className="page">
        {/* header头部 */}
        <div className='header'>
          <div className='classify-icon'></div>
          <div className='search-wrap'>
            <div className='search-icon'></div>
            <div className='text'>请输入宝贝名称</div>
          </div>
          <div className='login'>登录</div>
        </div>

        {/* 图片轮播banner */}
        <div className='banner'>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {
                this.state.slideList.map((item, index) => {
                  return (
                    <div className="swiper-slide" key={index}>
                      <a href={item.webs}>
                        <img src={item.image} alt={item.title} />
                      </a>
                    </div>
                  )
                })
              }
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>

        {/* 快速分类导航 */}
        <ul className='quick-nav'>
          <li>
            <img src="//vueshop.glbuys.com/uploadfiles/1484287695.png" alt="" />
            <p>潮流女装</p>
          </li>
          <li>
            <img src="//vueshop.glbuys.com/uploadfiles/1484287842.png" alt="" />
            <p>品牌男装</p>
          </li>
          <li>
            <img src="//vueshop.glbuys.com/uploadfiles/1484287985.png" alt="" />
            <p>电脑办公</p>
          </li>
          <li>
            <img src="//vueshop.glbuys.com/uploadfiles/1484288118.png" alt="" />
            <p>手机数码</p>
          </li>
        </ul>

        {/* 潮流女装 */}
        <div className="goods-level-wrap">
          <div className="classify-title color1">—— 潮流女装 ——</div>
          <div className="goods-level1-wrap">
            <div className="goods-level1-item0">
              <div className="goods-title">高跟鞋女2018新款春季单鞋仙女甜美链子尖头防水台细跟女鞋一字带</div>
              <div className="goods-text">精品打折</div>
              <div className="goods-price1">12.8元</div>
              <div className="goods-img">
                <img src="//vueshop.glbuys.com/uploadfiles/1524556409.jpg" alt="高跟鞋女2018新款春季单鞋仙女甜美链子尖头防水台细跟女鞋一字带" />
              </div>
            </div>
            <div className="goods-level1-item1">
              <div className="goods-row">
                <div className="goods-row-title">欧美尖头蝴蝶结拖鞋女夏外穿2018新款绸缎面细跟凉拖半拖鞋穆勒鞋</div>
                <div className="goods-row-text">品质精挑</div>
                <div className="goods-row-img">
                  <img src="//vueshop.glbuys.com/uploadfiles/1524556315.jpg" alt="欧美尖头蝴蝶结拖鞋女夏外穿2018新款绸缎面细跟凉拖半拖鞋穆勒鞋" />
                </div>
              </div>
              <div className="goods-row">
                <div className="goods-row-title">老爹鞋女韩版ulzzang原宿百搭网鞋透气网面内增高运动鞋网鞋夏季
              </div>
                <div className="goods-row-text">品质精挑</div>
                <div className="goods-row-img"><img src="//vueshop.glbuys.com/uploadfiles/1524556213.jpg" alt="老爹鞋女韩版ulzzang原宿百搭网鞋透气网面内增高运动鞋网鞋夏季" />
                </div>
              </div>
            </div>
          </div>
          <div className="goods-list-wrap">
            <div className="goods-list">
              <div className="title">小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
              <div className="image"><img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt="小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋" /></div>
              <div className="price">¥288</div>
              <div className="unprice">¥576</div>
            </div>
            <div className="goods-list">
              <div className="title">雪兰黛2018春季新款高跟鞋尖头细跟性感鞋子女韩版透气纱网女单鞋 </div>
              <div className="image"><img src="//vueshop.glbuys.com/uploadfiles/1524556026.jpg" alt="雪兰黛2018春季新款高跟鞋尖头细跟性感鞋子女韩版透气纱网女单鞋 " /></div>
              <div className="price">¥280</div>
              <div className="unprice">¥560</div>
            </div>
            <div className="goods-list">
              <div className="title">2018夏季新款韩版百搭高跟鞋女显瘦细跟黑色工作鞋金属扣露趾凉鞋</div>
              <div className="image"><img src="//vueshop.glbuys.com/uploadfiles/1524555954.jpg" alt="2018夏季新款韩版百搭高跟鞋女显瘦细跟黑色工作鞋金属扣露趾凉鞋" /></div>
              <div className="price">¥300</div>
              <div className="unprice">¥600</div>
            </div>
            <div className="goods-list">
              <div className="title">2018新款韩版高跟鞋女凉鞋夏细跟尖头一字扣猫跟鞋包头百搭磨砂皮</div>
              <div className="image"><img src="//vueshop.glbuys.com/uploadfiles/1524555891.jpg" alt="2018新款韩版高跟鞋女凉鞋夏细跟尖头一字扣猫跟鞋包头百搭磨砂皮" /></div>
              <div className="price">¥200</div>
              <div className="unprice">¥400</div>
            </div>
          </div>
        </div>
        
        {/* 品牌男装 */}
        <div className="goods-level-wrap">
          <div className="classify-title color2">
            —— 品牌男装 ——
          </div>
          <div className="goods-level1-wrap">
            <div className="goods-level1-item0">
              <div className="goods-title2">
                新款短袖男士夏季3d立体图案体恤猴子搞怪大猩猩个性t恤大码衣服
              </div>
              <div className="goods-text2">
                火爆开售
              </div>
              <div className="goods-img2">
                <img src="//vueshop.glbuys.com/uploadfiles/1524568819.jpg" alt="新款短袖男士夏季3d立体图案体恤猴子搞怪大猩猩个性t恤大码衣服" />
              </div>
            </div>
            <div className="goods-level1-item0">
              <div className="goods-title2">
                成人五分裤海边度假短裤男士潮流沙滩库子2018新款大裤衩夏装悠闲
              </div>
              <div className="goods-text2">
                火爆开售
              </div>
              <div className="goods-img2">
                <img src="//vueshop.glbuys.com/uploadfiles/1524567419.jpg" alt="成人五分裤海边度假短裤男士潮流沙滩库子2018新款大裤衩夏装悠闲" />
              </div>
            </div>
          </div>
          <div className="goods-list-wrap">
            <div className="goods-list">
              <div className="title">
                男装棉麻休闲裤男夏季短裤男潮七分裤中裤宽松大码库子大裤衩日系
              </div>
              <div className="image">
                <img src="//vueshop.glbuys.com/uploadfiles/1524567287.jpg" alt="男装棉麻休闲裤男夏季短裤男潮七分裤中裤宽松大码库子大裤衩日系" />
              </div>
              <div className="price">
                69
              </div>
              <div className="unprice">
                138
              </div>
            </div>
            <div className="goods-list">
              <div className="title">
                牛仔裤男宽松九分裤韩版潮流文艺男生直筒夏季薄裤子百搭学生港风
              </div>
              <div className="image">
                <img src="//vueshop.glbuys.com/uploadfiles/1524562387.png" alt="牛仔裤男宽松九分裤韩版潮流文艺男生直筒夏季薄裤子百搭学生港风" />
              </div>
              <div className="price">
                78
              </div>
              <div className="unprice">
                156
              </div>
            </div>
            <div className="goods-list">
              <div className="title">
                衣长: 常规领型: 连帽颜色: 白色 黑色尺码: S 现货 M 现货 L 现货面料分类: 涂层布款式细节: 多口袋品牌: harsh and cruel/桀骜不驯男装-穿着方式: 外穿厚薄: 加厚填充物:
                灰鸭绒适用场景: 其他休闲基础风格: 青春流行
              </div>
              <div className="image">
                <img src="//vueshop.glbuys.com/uploadfiles/1524562438.jpg"
                  alt="衣长: 常规领型: 连帽颜色: 白色 黑色尺码: S 现货 M 现货 L 现货面料分类: 涂层布款式细节: 多口袋品牌: harsh and cruel/桀骜不驯男装-穿着方式: 外穿厚薄: 加厚填充物: 灰鸭绒适用场景: 其他休闲基础风格: 青春流行" />
              </div>
              <div className="price">
                119
              </div>
              <div className="unprice">
                238
              </div>
            </div>
            <div className="goods-list">
              <div className="title">
                HARSHCRUEL 秋冬男保暖充绒夹棉加厚防风羽绒棉服高领面罩TPU外套
              </div>
              <div className="image">
                <img src="//vueshop.glbuys.com/uploadfiles/1524561627.png" alt="HARSHCRUEL 秋冬男保暖充绒夹棉加厚防风羽绒棉服高领面罩TPU外套" />
              </div>
              <div className="price">
                778
              </div>
              <div className="unprice">
                1556
              </div>
            </div>
          </div>
        </div>
        
        {/* 电脑办公 */}
        <div className="goods-level-wrap">
          <div className="classify-title color3">
            —— 电脑办公 ——
          </div>
          <div className="goods-level1-wrap">
            <div className="goods-level1-item0">
            <div className="goods-title">
              酷睿i5四核GTX1060独显台式机组装电脑主机整机 绝地求生吃鸡游戏
            </div>
            <div className="goods-text">
              精品打折
            </div>
            <div className="goods-price3">
              4599元
            </div>
            <div className="goods-img">
              <img src="//vueshop.glbuys.com/uploadfiles/1524561138.jpg" alt="酷睿i5四核GTX1060独显台式机组装电脑主机整机 绝地求生吃鸡游戏" />
            </div>
            </div>
            <div className="goods-level1-item1">
            <div className="goods-row">
              <div className="goods-row-title">
              金属鼠标垫个性定制LOGO大号高贵时尚航空级铝合金圆形游戏办公批
              </div>
              <div className="goods-row-text">
              品质精挑
              </div>
              <div className="goods-row-img">
              <img src="//vueshop.glbuys.com/uploadfiles/1524559781.png" alt="金属鼠标垫个性定制LOGO大号高贵时尚航空级铝合金圆形游戏办公批" />
              </div>
            </div>
            <div className="goods-row">
              <div className="goods-row-title">
              微软ARC TOUCH无线蓝牙鼠标 苹果MAC笔记本创意超薄便携时尚折叠
              </div>
              <div className="goods-row-text">
              品质精挑
              </div>
              <div className="goods-row-img">
              <img src="//vueshop.glbuys.com/uploadfiles/1524559415.png" alt="微软ARC TOUCH无线蓝牙鼠标 苹果MAC笔记本创意超薄便携时尚折叠" />
              </div>
            </div>
            </div>
          </div>
          <div className="goods-list-wrap">
            <div className="goods-list">
            <div className="title">
              美国tomtoc13/15寸苹果笔记本macbook时尚商务手提男女电脑包纤薄
            </div>
            <div className="image">
              <img src="//vueshop.glbuys.com/uploadfiles/1524558854.png" alt="美国tomtoc13/15寸苹果笔记本macbook时尚商务手提男女电脑包纤薄" />
            </div>
            <div className="price">
              149
            </div>
            <div className="unprice">
              298
            </div>
            </div>
            <div className="goods-list">
            <div className="title">
              以诺双肩电脑包13.3/14/15.6寸男小米苹果电脑背包商务笔记本包女
            </div>
            <div className="image">
              <img src="//vueshop.glbuys.com/uploadfiles/1524558775.jpg" alt="以诺双肩电脑包13.3/14/15.6寸男小米苹果电脑背包商务笔记本包女" />
            </div>
            <div className="price">
              129
            </div>
            <div className="unprice">
              258
            </div>
            </div>
            <div className="goods-list">
            <div className="title">
              联想华硕神舟笔记本贴膜15.6 戴尔宏基HP外壳保护膜电脑贴纸14寸
            </div>
            <div className="image">
              <img src="//vueshop.glbuys.com/uploadfiles/1524558607.jpg" alt="联想华硕神舟笔记本贴膜15.6 戴尔宏基HP外壳保护膜电脑贴纸14寸" />
            </div>
            <div className="price">
              28
            </div>
            <div className="unprice">
              56
            </div>
            </div>
            <div className="goods-list">
            <div className="title">
              ETS六代 笔记本抽风式散热器侧吸式戴尔联想电脑风扇17机14寸15.6
            </div>
            <div className="image">
              <img src="//vueshop.glbuys.com/uploadfiles/1524558535.jpg" alt="ETS六代 笔记本抽风式散热器侧吸式戴尔联想电脑风扇17机14寸15.6" />
            </div>
            <div className="price">
              108
            </div>
            <div className="unprice">
              216
            </div>
            </div>
          </div>
          </div>     
              
        <div className="reco-title-wrap">
          <div className="line"></div>
          <div className="reco-text-wrap">
            <div className="reco-icon"></div>
            <div className="reco-text">
            为您推荐
            </div>
          </div>
          <div className="line"></div>
        </div>
        
        <div className="reco-item-wrap">
          <div className="reco-item">
            <div className="image">
            <img src="//vueshop.glbuys.com/uploadfiles/1484283665.jpg" alt="ONLY冬装新品雪纺拼接流苏腰带长款连衣裙女" />
            </div>
            <div className="title">
            ONLY冬装新品雪纺拼接流苏腰带长款连衣裙女
            </div>
            <div className="price">
            399.00
            </div>
          </div>
          <div className="reco-item">
            <div className="image">
            <img src="//vueshop.glbuys.com/uploadfiles/1484284030.jpg" alt="韩都衣舍2016秋新款时尚拼接色宽松显瘦气质长款长袖连衣裙" />
            </div>
            <div className="title">
            韩都衣舍2016秋新款时尚拼接色宽松显瘦气质长款长袖连衣裙
            </div>
            <div className="price">
            128.00
            </div>
          </div>
          <div className="reco-item">
            <div className="image">
            <img src="//vueshop.glbuys.com/uploadfiles/1484283964.jpg" alt="韩都衣舍2017韩版女装春装新款木耳边卡通刺绣显瘦连衣裙" />
            </div>
            <div className="title">
            韩都衣舍2017韩版女装春装新款木耳边卡通刺绣显瘦连衣裙
            </div>
            <div className="price">
            118.00
            </div>
          </div>
          <div className="reco-item">
            <div className="image">
            <img src="//vueshop.glbuys.com/uploadfiles/1484284394.jpg" alt="美动态胖妹妹春装打底裙2017新款加肥加大码女装胖mm显瘦连衣裙" />
            </div>
            <div className="title">
            美动态胖妹妹春装打底裙2017新款加肥加大码女装胖mm显瘦连衣裙
            </div>
            <div className="price">
            139.00
            </div>
          </div>
          <div className="reco-item">
            <div className="image">
            <img src="//vueshop.glbuys.com/uploadfiles/1484284752.jpg" alt="美动态胖妹妹秋冬2016新款大码女装200斤胖mm显瘦印花直筒连衣裙" />
            </div>
            <div className="title">
            美动态胖妹妹秋冬2016新款大码女装200斤胖mm显瘦印花直筒连衣裙
            </div>
            <div className="price">
            159.00
            </div>
          </div>
          <div className="reco-item">
            <div className="image">
            <img src="//vueshop.glbuys.com/uploadfiles/1484284949.jpg" alt="李宁运动裤男长裤 2016秋冬款篮球系列修身直筒卫裤运动套装下装" />
            </div>
            <div className="title">
            李宁运动裤男长裤 2016秋冬款篮球系列修身直筒卫裤运动套装下装
            </div>
            <div className="price">
            109.00
            </div>
          </div>
          <div className="reco-item">
            <div className="image">
            <img src="//vueshop.glbuys.com/uploadfiles/1484285010.jpg" alt="国家队全英赛比赛 正品李宁羽毛球女羽毛球裙 短裙 裙裤春夏下装" />
            </div>
            <div className="title">
            国家队全英赛比赛 正品李宁羽毛球女羽毛球裙 短裙 裙裤春夏下装
            </div>
            <div className="price">
            188.00
            </div>
          </div>
          <div className="reco-item">
            <div className="image">
            <img src="//vueshop.glbuys.com/uploadfiles/1484285074.jpg" alt="阿迪达斯2016秋季新款女子运动休闲下装针织短裤" />
            </div>
            <div className="title">
            阿迪达斯2016秋季新款女子运动休闲下装针织短裤
            </div>
            <div className="price">
            257.00
            </div>
          </div>
          <div className="reco-item">
            <div className="image">
            <img src="//vueshop.glbuys.com/uploadfiles/1484288431.jpg" alt="Bosideng/波司登2016新款90%鹅绒男轻薄中长款连帽羽绒服" />
            </div>
            <div className="title">
            Bosideng/波司登2016新款90%鹅绒男轻薄中长款连帽羽绒服
            </div>
            <div className="price">
            759.00
            </div>
          </div>
          <div className="reco-item">
            <div className="image">
            <img src="//vueshop.glbuys.com/uploadfiles/1484288512.jpg" alt="波司登2016新款加厚男士羽绒服中长款带帽保暖冬外套" />
            </div>
            <div className="title">
            波司登2016新款加厚男士羽绒服中长款带帽保暖冬外套
            </div>
            <div className="price">
            799.00
            </div>
          </div>
          <div className="reco-item">
            <div className="image">
            <img src="//vueshop.glbuys.com/uploadfiles/1484288656.jpg" alt="阿迪达斯羽绒服男 2016冬季大码保暖运动服休闲连帽外套" />
            </div>
            <div className="title">
            阿迪达斯羽绒服男 2016冬季大码保暖运动服休闲连帽外套
            </div>
            <div className="price">
            798.00
            </div>
          </div>
          <div className="reco-item">
            <div className="image">
            <img src="//vueshop.glbuys.com/uploadfiles/1484289248.jpg" alt="Apple/苹果 MacBook Air 13.3英寸笔记本电脑 i5 8G 128G" />
            </div>
            <div className="title">
            Apple/苹果 MacBook Air 13.3英寸笔记本电脑 i5 8G 128G
            </div>
            <div className="price">
            6988.00
            </div>
          </div>
          </div>
      
      </div>
    )
  }
}

export default IndexComponent;



