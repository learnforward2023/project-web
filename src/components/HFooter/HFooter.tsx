import React from 'react'
import { Col, Row } from 'antd'
import Link from 'next/link'
import './index.scss'
import HButton from '../Buttons/HButton'

const HFooter: React.FC = () => {
  return (
    <section className="Footer">
      <div style={{ paddingTop: 54, backgroundColor: 'white' }}>
        <footer className="study_together_area">
          <div className="foo_top_header_one">
            <div className="container">
              <Row gutter={32}>
                <Col lg={{ span: 8 }} md={{ span: 8 }} sm={{ span: 12 }}>
                  <div className="study_together_part">
                    <h5>Discord Community</h5>
                    <p>
                      Tham gia Discord của Study Together để giao lưu cũng như tìm kiếm bạn bè đồng hành trên con đường học tập (^-^).
                    </p>
                    <HButton className="mt-4" variant="tertiary" size="small" onClick={() => window.open('https://discord.gg/dvfxZZKd')}>Tham gia &rarr; </HButton>
                  </div>
                </Col>
                <Col lg={{ span: 8 }} md={{ span: 8 }} sm={{ span: 12 }} xs={{ span: 12 }}>
                  <div className="study_together_part">
                    <h5>Tutorials</h5>
                    <ul className=" study_together_widget">
                      <li><Link rel="https://studytogether.vn" href="/code/basic/c/programming-language">C Programming</Link></li>
                      <li><Link rel="https://studytogether.vn" href="/code/basic/cpp/programming-language">C++ Programming</Link></li>
                      <li><Link rel="https://studytogether.vn" href="/code/basic/git/about-version-control">Git & Github</Link></li>
                      <li><Link rel="https://studytogether.vn" href="/code/basic/cpp/object-oriented-programming/what-is-oop">OOP</Link></li>
                      <li><Link rel="https://studytogether.vn" href="/code/basic/cpp/sky-birds-game/initialization">Game with SDL2</Link></li>
                      <li><Link rel="https://studytogether.vn" href="/code/basic/linux/about-linux">Linux</Link></li>
                    </ul>
                  </div>
                </Col>
                <Col lg={{ span: 8 }} md={{ span: 8 }} sm={{ span: 12 }} xs={{ span: 12 }}>
                  <div className="study_together_part">
                    <h5>Social Links</h5>
                    <ul className="study_together_social_links">
                      <li><Link rel="https://studytogether.vn" href="https://www.youtube.com/channel/UCcuOstIBAclY2u7wwswWH_g" target="_blank">Youtube</Link></li>
                      <li><Link rel="https://studytogether.vn" href="https://github.com/learnforward2023" target="_blank">Github</Link></li>
                      <li><Link rel="https://studytogether.vn" href="https://www.tiktok.com/@study2together" target="_blank">Tiktok</Link></li>
                      <li><Link rel="https://studytogether.vn" href="https://discord.gg/dvfxZZKd" target="_blank">Discord</Link></li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="study_together_bottom_header_one">
            <p>© Made with <i><u>Study Together</u></i> ❤</p>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default HFooter
