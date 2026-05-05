# GOWS合同会社 デザイン仕様

## デザイントークン

### カラー
```
Primary:         #1e3a5f  （ネイビー：信頼感）
Primary Dark:    #0f2236
Accent:          #2563eb  （ブルー：先進性・CTA）
Accent Hover:    #1d4ed8
Background:      #ffffff
Background Muted:#f8fafc  （薄グレー：交互セクション）
Background Dark: #0f172a  （ダーク：サービスセクション）
Text Primary:    #0f172a
Text Secondary:  #475569
Text On Dark:    #f1f5f9
Border:          #e2e8f0
Tag BG:          #eff6ff
Tag Text:        #1d4ed8
```

### タイポグラフィ
```
Font:      -apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif

H1:        52px / line-height 1.2 / weight 700   （mobile: 36px）
H2:        36px / line-height 1.3 / weight 700   （mobile: 28px）
H3:        22px / line-height 1.4 / weight 600   （mobile: 18px）
Body:      16px / line-height 1.75
Small:     14px / line-height 1.6
Caption:   12px
```

### スペーシング
```
Section V-Pad:    96px top/bottom  （mobile: 64px）
Container Width:  1100px max, 24px horizontal padding
Card Padding:     32px             （mobile: 24px）
Card Gap:         24px
Card Radius:      12px
Button Radius:    6px
```

### ボタン
```
Primary Button:
  background: #2563eb
  color: #ffffff
  padding: 14px 32px
  font-size: 16px / weight 600
  border-radius: 6px
  hover: background #1d4ed8

Secondary Button:
  background: transparent
  border: 2px solid #2563eb
  color: #2563eb
  padding: 12px 30px
  hover: background #eff6ff

Ghost Button（ダーク背景用）:
  background: transparent
  border: 2px solid rgba(255,255,255,0.6)
  color: #ffffff
  padding: 12px 30px
```

---

## セクション別デザイン仕様

### NAV
```
position: sticky, top: 0, z-index: 100
height: 72px
background: white, shadow on scroll
layout: logo左 / links中央 / CTA右
CTA: Primary Button（小: padding 10px 20px）
mobile: ハンバーガーメニュー（初期スコープ外）
```

### Hero
```
background: linear-gradient(135deg, #1e3a5f 0%, #0f2236 100%)
min-height: 88vh
layout: テキスト左寄せ（コンテナ内）、上下中央揃え
padding: 160px 24px 96px

H1: 52px, color: #ffffff
subtext: 18px, color: rgba(255,255,255,0.82), max-width: 560px
CTA group: margin-top 40px, display flex, gap 16px
  - Primary Button（大）
  - Ghost Button
```

### 実績バー
```
background: #f8fafc
padding: 48px 24px
layout: 3カラム均等（mobile: 縦並び）
divider: 1px solid #e2e8f0 をカラム間に

数字: 48px / weight 800 / color #1e3a5f
ラベル: 14px / color #475569
```

### 課題セクション
```
background: #ffffff
カードグリッド: 3カラム gap 24px (tablet: 2カラム, mobile: 1カラム)
中間CTA: text-align center, margin-top 48px

カードスタイル:
  background: #ffffff
  border: 1px solid #e2e8f0
  box-shadow: 0 4px 16px rgba(0,0,0,0.06)
  border-radius: 12px
  padding: 32px
  border-top: 4px solid #2563eb

カード内:
  - H3: 22px
  - 本文: 14px, #475569
  - 解決策バッジ: tag style, margin-top 20px
```

### サービス詳細
```
background: #0f172a（ダーク）
layout: 3カラムカードグリッド (mobile: 1カラム)

カードスタイル:
  background: rgba(255,255,255,0.07)
  border: 1px solid rgba(255,255,255,0.12)
  border-radius: 12px
  padding: 32px
  display flex / flex-direction column

カード内:
  - サービス名: H3, white
  - 説明: 14px, #94a3b8
  - タグリスト: 小バッジ（bg rgba(37,99,235,0.25), text #93c5fd）
  - CTA: Ghost Button（小）, margin-top auto
```

### 導入事例
```
background: #f8fafc
layout: 3カラムカードグリッド (mobile: 1カラム)

カードスタイル:
  background: #ffffff
  border-radius: 12px
  padding: 28px 32px
  box-shadow: 0 2px 8px rgba(0,0,0,0.06)

カード内:
  - 業種バッジ: tag style
  - 課題: 14px, #475569
  - 成果: H3 style, accent color
```

### FAQ
```
background: #ffffff
layout: max-width 720px, margin 0 auto

アコーディオン:
  各アイテム: border-bottom 1px solid #e2e8f0, padding 24px 0
  Q: 18px / weight 600 / flex justify-between
  A: 14px / #475569 / padding-top 12px
  開閉ボタン: "+" / "−", accent color
```

### Footer CTA
```
background: linear-gradient(135deg, #2563eb, #1e3a5f)
padding: 96px 24px
text-align: center

H2: 42px, white (mobile: 30px)
subtext: 18px, rgba(255,255,255,0.82)
CTA: Primary Button（白: bg white, text #2563eb）+ Ghost Button
```

### FOOTER
```
background: #0f172a
padding: 64px 24px 32px
layout: 4カラム（mobile: 2カラム）

ロゴ: #ffffff, 20px, weight 700
リンク: #94a3b8, hover #f1f5f9, 14px
copyright: border-top 1px solid #1e293b, padding-top 24px, 12px, center
```

---

## レスポンシブ ブレークポイント

```
Mobile:  max-width 767px
Tablet:  768px – 1023px
Desktop: 1024px 以上

3カラム → tablet: 2カラム → mobile: 1カラム
Section V-Pad: 96px → mobile: 64px
H1: 52px → mobile: 36px
H2: 36px → mobile: 28px
```

---

## チェックリスト

- [x] 見出しだけ読んでも要点が伝わる（DX・AX→課題共感→サービス→実績→行動）
- [x] CTA が文脈的に自然（Hero→課題後→サービス別→Footer CTA の4段階）
- [x] テキストコントラスト十分（white on #0f2236: ◎, dark on white: ◎）
- [x] 余白ルール一貫（section 96px, card 32px）
- [x] デバイス別可読性: ブレークポイント定義済み
