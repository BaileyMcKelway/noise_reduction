import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export interface IPrivacyProps {}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      bdt: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export default function Privacy(props: IPrivacyProps) {
  return (
    <div className="container">
      <NavBar />
      <>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n  [data-custom-class='body'], [data-custom-class='body'] * {\n          background: transparent !important;\n        }\n[data-custom-class='title'], [data-custom-class='title'] * {\n          font-family: Arial !important;\nfont-size: 26px !important;\ncolor: #000000 !important;\n        }\n[data-custom-class='subtitle'], [data-custom-class='subtitle'] * {\n          font-family: Arial !important;\ncolor: #595959 !important;\nfont-size: 14px !important;\n        }\n[data-custom-class='heading_1'], [data-custom-class='heading_1'] * {\n          font-family: Arial !important;\nfont-size: 19px !important;\ncolor: #000000 !important;\n        }\n[data-custom-class='heading_2'], [data-custom-class='heading_2'] * {\n          font-family: Arial !important;\nfont-size: 17px !important;\ncolor: #000000 !important;\n        }\n[data-custom-class='body_text'], [data-custom-class='body_text'] * {\n          color: #595959 !important;\nfont-size: 14px !important;\nfont-family: Arial !important;\n        }\n[data-custom-class='link'], [data-custom-class='link'] * {\n          color: #3030F1 !important;\nfont-size: 14px !important;\nfont-family: Arial !important;\nword-break: break-word !important;\n        }\n",
          }}
        />
        <div data-custom-class="body">
          <div>
            <strong>
              <span style={{ fontSize: 26 }}>
                <span data-custom-class="title">PRIVACY NOTICE</span>
              </span>
            </strong>
          </div>
          <div>
            <br />
          </div>
          <div>
            <span style={{ color: 'rgb(127, 127, 127)' }}>
              <strong>
                <span style={{ fontSize: 15 }}>
                  <span data-custom-class="subtitle">
                    Last updated{' '}
                    <bdt className="question">January 20, 2021</bdt>
                  </span>
                </span>
              </strong>
            </span>
          </div>
          <div>
            <br />
          </div>
          <div>
            <br />
          </div>
          <div>
            <br />
          </div>
          <div style={{ lineHeight: '1.5' }}>
            <span style={{ color: 'rgb(127, 127, 127)' }}>
              <span style={{ color: 'rgb(89, 89, 89)', fontSize: 15 }}>
                <span data-custom-class="body_text">
                  Thank you for choosing to be part of our community at{' '}
                  <bdt className="question">MediaEdits.io</bdt>
                  <span style={{ color: 'rgb(89, 89, 89)' }}>
                    <span data-custom-class="body_text">
                      <bdt className="block-component" />
                    </span>
                  </span>{' '}
                  ("
                  <span style={{ color: 'rgb(89, 89, 89)' }}>
                    <span data-custom-class="body_text">
                      <bdt className="block-component" />
                    </span>
                  </span>
                  <strong>Company</strong>
                </span>
                <span style={{ color: 'rgb(127, 127, 127)' }}>
                  <span style={{ color: 'rgb(89, 89, 89)' }}>
                    <span data-custom-class="body_text">
                      <span style={{ color: 'rgb(89, 89, 89)' }}>
                        <span data-custom-class="body_text">
                          <bdt className="statement-end-if-in-editor">
                            <span data-custom-class="body_text" />
                          </bdt>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
                <span data-custom-class="body_text">
                  ", "<strong>we</strong>", "<strong>us</strong>", "
                  <strong>our</strong>"). We are committed to protecting your
                  personal information and your right to privacy. If you have
                  any questions or concerns about this privacy notice, or our
                  practices with regards to your personal information, please
                  contact us at{' '}
                  <bdt className="question">contact@mediaedits.io</bdt>.
                </span>
              </span>
            </span>
          </div>
          <div style={{ lineHeight: '1.5' }}>
            <span style={{ fontSize: 15 }}>
              <br />
            </span>
          </div>
          <div style={{ lineHeight: '1.5' }}>
            <span style={{ fontSize: 15 }}>
              <span style={{ color: 'rgb(127, 127, 127)' }}>
                <span data-custom-class="body_text">
                  When you{' '}
                  <span style={{ color: 'rgb(89, 89, 89)' }}>
                    <span data-custom-class="body_text">
                      <bdt className="block-component" />
                    </span>
                  </span>
                  visit our website{' '}
                  <bdt className="question">
                    <a
                      href="https://mediaedits.io/"
                      target="_blank"
                      data-custom-class="link"
                    >
                      https://mediaedits.io/
                    </a>
                  </bdt>{' '}
                  (the "<strong>Website</strong>"),{' '}
                  <span style={{ color: 'rgb(89, 89, 89)' }}>
                    <span data-custom-class="body_text">
                      <bdt className="statement-end-if-in-editor" />
                      <bdt className="block-component" />
                      <bdt className="block-component" />
                    </span>
                  </span>{' '}
                  and more generally, use any of our services (the "
                  <strong>Services</strong>", which include the&nbsp;
                </span>
                <span style={{ color: 'rgb(89, 89, 89)' }}>
                  <span data-custom-class="body_text">
                    <span style={{ color: 'rgb(89, 89, 89)' }}>
                      <span data-custom-class="body_text">
                        <bdt className="block-component">
                          <span data-custom-class="body_text" />
                        </bdt>
                        Website
                        <span style={{ color: 'rgb(89, 89, 89)' }}>
                          <span data-custom-class="body_text">
                            <bdt className="statement-end-if-in-editor" />
                          </span>
                        </span>
                        <bdt className="block-component" />
                      </span>
                    </span>
                  </span>
                  <span data-custom-class="body_text">
                    <span style={{ color: 'rgb(89, 89, 89)' }}>
                      <span data-custom-class="body_text">
                        <bdt className="block-component" />
                      </span>
                    </span>
                  </span>
                </span>
              </span>
              <span data-custom-class="body_text">
                ), we appreciate that you are trusting us with your personal
                information. We take your privacy very seriously. In this
                privacy notice, we seek to explain to you in the clearest way
                possible what information we collect, how we use it and what
                rights you have in relation to it. We hope you take some time to
                read through it carefully, as it is important. If there are any
                terms in this privacy notice that you do not agree with, please
                discontinue use of our Services immediately.
              </span>
            </span>
          </div>
          <div style={{ lineHeight: '1.5' }}>
            <span style={{ fontSize: 15 }}>
              <br />
            </span>
          </div>
          <div style={{ lineHeight: '1.5' }}>
            <span style={{ fontSize: 15 }}>
              <span style={{ color: 'rgb(127, 127, 127)' }}>
                <span style={{ color: 'rgb(89, 89, 89)' }}>
                  <span data-custom-class="body_text">
                    This privacy notice applies to all information collected
                    through our Services (which, as described above, includes
                    our&nbsp;
                  </span>
                  <span style={{ color: 'rgb(89, 89, 89)' }}>
                    <span data-custom-class="body_text">
                      <bdt className="block-component">
                        <span data-custom-class="body_text" />
                      </bdt>
                      Website
                      <span style={{ color: 'rgb(89, 89, 89)' }}>
                        <span data-custom-class="body_text">
                          <bdt className="statement-end-if-in-editor" />
                        </span>
                      </span>
                      <bdt className="block-component">
                        <bdt className="block-component" />
                      </bdt>
                    </span>
                  </span>
                </span>
              </span>
            </span>
            <span data-custom-class="body_text">
              ), as well as, any related services, sales, marketing or events.
            </span>
          </div>
          <div style={{ lineHeight: '1.5' }}>
            <span style={{ fontSize: 15 }}>
              <br />
            </span>
          </div>
          <div style={{ lineHeight: '1.5' }}>
            <span style={{ fontSize: 15 }}>
              <span style={{ color: 'rgb(127, 127, 127)' }}>
                <span style={{ color: 'rgb(89, 89, 89)' }}>
                  <span data-custom-class="body_text">
                    <strong>
                      Please read this privacy notice carefully as it will help
                      you understand what we do with the information that we
                      collect.
                    </strong>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <div style={{ lineHeight: '1.5' }}>
            <span style={{ fontSize: 15 }}>
              <br />
            </span>
          </div>
          <div style={{ lineHeight: '1.5' }}>
            <span style={{ fontSize: 15 }}>
              <span style={{ color: 'rgb(127, 127, 127)' }}>
                <span style={{ color: 'rgb(0, 0, 0)' }}>
                  <strong>
                    <span data-custom-class="heading_1">TABLE OF CONTENTS</span>
                  </strong>
                </span>
              </span>
            </span>
          </div>
          <div style={{ lineHeight: '1.5' }}>
            <span style={{ fontSize: 15 }}>
              <br />
            </span>
          </div>
          <div style={{ lineHeight: '1.5' }}>
            <span style={{ fontSize: 15 }}>
              <a data-custom-class="link" href="#infocollect">
                <span style={{ color: 'rgb(89, 89, 89)' }}>
                  1. WHAT INFORMATION DO WE COLLECT?
                </span>
              </a>
              <span style={{ color: 'rgb(127, 127, 127)' }}>
                <span style={{ color: 'rgb(89, 89, 89)' }}>
                  <span data-custom-class="body_text">
                    <span style={{ color: 'rgb(89, 89, 89)' }}>
                      <bdt className="block-component" />
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <div style={{ lineHeight: '1.5' }}>
            <span style={{ fontSize: 15 }}>
              <a data-custom-class="link" href="#infouse">
                <span style={{ color: 'rgb(89, 89, 89)' }}>
                  2. HOW DO WE USE YOUR INFORMATION?
                </span>
              </a>
              <span style={{ color: 'rgb(127, 127, 127)' }}>
                <span style={{ color: 'rgb(89, 89, 89)' }}>
                  <span data-custom-class="body_text">
                    <span style={{ color: 'rgb(89, 89, 89)' }}>
                      <span style={{ color: 'rgb(89, 89, 89)' }}>
                        <bdt className="statement-end-if-in-editor" />
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <div style={{ lineHeight: '1.5' }}>
            <span style={{ fontSize: 15 }}>
              <span style={{ color: 'rgb(89, 89, 89)' }}>
                <a data-custom-class="link" href="#infoshare">
                  3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
                </a>
              </span>
              <span style={{ color: 'rgb(127, 127, 127)' }}>
                <span style={{ color: 'rgb(89, 89, 89)' }}>
                  <span data-custom-class="body_text">
                    <span style={{ color: 'rgb(89, 89, 89)' }}>
                      <bdt className="block-component" />
                    </span>
                    <bdt className="block-component" />
                    <span style={{ color: 'rgb(89, 89, 89)' }}>
                      <bdt className="block-component" />
                      <bdt className="block-component" />
                    </span>
                  </span>
                  <bdt className="block-component" />
                </span>
              </span>
            </span>
          </div>
          <div style={{ lineHeight: '1.5' }}>
            <span style={{ fontSize: 15 }}>
              <a data-custom-class="link" href="#intltransfers">
                <span style={{ color: 'rgb(89, 89, 89)' }}>
                  4. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
                </span>
              </a>
              <span style={{ color: 'rgb(127, 127, 127)' }}>
                <span style={{ color: 'rgb(89, 89, 89)' }}>
                  <span data-custom-class="body_text">
                    <span style={{ color: 'rgb(89, 89, 89)' }}>
                      <bdt className="statement-end-if-in-editor" />
                      <bdt className="block-component" />
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <div style={{ lineHeight: '1.5' }}>
            <span style={{ fontSize: 15 }}>
              <a data-custom-class="link" href="#3pwebsites">
                <span style={{ color: 'rgb(89, 89, 89)' }}>
                  5. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
                </span>
              </a>
              <span style={{ color: 'rgb(127, 127, 127)' }}>
                <span style={{ color: 'rgb(89, 89, 89)' }}>
                  <span data-custom-class="body_text">
                    <span style={{ color: 'rgb(89, 89, 89)' }}>
                      <bdt className="statement-end-if-in-editor" />
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <div style={{ lineHeight: '1.5' }}>
            <span style={{ fontSize: 15 }}>
              <a data-custom-class="link" href="#inforetain">
                <span style={{ color: 'rgb(89, 89, 89)' }}>
                  6. HOW LONG DO WE KEEP YOUR INFORMATION?
                </span>
              </a>
              <span style={{ color: 'rgb(127, 127, 127)' }}>
                <span style={{ color: 'rgb(89, 89, 89)' }}>
                  <span data-custom-class="body_text">
                    <span style={{ color: 'rgb(89, 89, 89)' }}>
                      <span style={{ color: 'rgb(89, 89, 89)' }}>
                        <bdt className="block-component" />
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <div style={{ lineHeight: '1.5' }}>
            <span style={{ fontSize: 15 }}>
              <a data-custom-class="link" href="#infosafe">
                <span style={{ color: 'rgb(89, 89, 89)' }}>
                  7. HOW DO WE KEEP YOUR INFORMATION SAFE?
                </span>
              </a>
              <span style={{ color: 'rgb(127, 127, 127)' }}>
                <span style={{ color: 'rgb(89, 89, 89)' }}>
                  <span data-custom-class="body_text">
                    <span style={{ color: 'rgb(89, 89, 89)' }}>
                      <bdt className="statement-end-if-in-editor" />
                      <bdt className="block-component" />
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <div style={{ lineHeight: '1.5' }}>
            <span style={{ fontSize: 15 }}>
              <span style={{ color: 'rgb(89, 89, 89)' }}>
                <a data-custom-class="link" href="#privacyrights">
                  8. WHAT ARE YOUR PRIVACY RIGHTS?
                </a>
              </span>
            </span>
          </div>
          <div style={{ lineHeight: '1.5' }}>
            <span style={{ fontSize: 15 }}>
              <a data-custom-class="link" href="#DNT">
                <span style={{ color: 'rgb(89, 89, 89)' }}>
                  9. CONTROLS FOR DO-NOT-TRACK FEATURES
                </span>
              </a>
            </span>
          </div>
          <div style={{ lineHeight: '1.5' }}>
            <span style={{ fontSize: 15 }}>
              <a data-custom-class="link" href="#caresidents">
                <span style={{ color: 'rgb(89, 89, 89)' }}>
                  10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                </span>
              </a>
            </span>
          </div>
          <div style={{ lineHeight: '1.5' }}>
            <span style={{ fontSize: 15 }}>
              <a data-custom-class="link" href="#policyupdates">
                <span style={{ color: 'rgb(89, 89, 89)' }}>
                  11. DO WE MAKE UPDATES TO THIS NOTICE?
                </span>
              </a>
            </span>
          </div>
          <div style={{ lineHeight: '1.5' }}>
            <a data-custom-class="link" href="#contact">
              <span style={{ color: 'rgb(89, 89, 89)', fontSize: 15 }}>
                12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </span>
            </a>
          </div>
          <div style={{ lineHeight: '1.5' }}>
            <a data-custom-class="link" href="#request">
              <span style={{ color: 'rgb(89, 89, 89)' }}>
                13. HOW CAN YOU REVIEW, UPDATE OR DELETE THE DATA WE COLLECT
                FROM YOU?
              </span>
            </a>
          </div>
          <div style={{ lineHeight: '1.5' }}>
            <br />
          </div>
          <div id="infocollect" style={{ lineHeight: '1.5' }}>
            <span style={{ color: 'rgb(127, 127, 127)' }}>
              <span style={{ color: 'rgb(89, 89, 89)', fontSize: 15 }}>
                <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                  <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                    <span id="control" style={{ color: 'rgb(0, 0, 0)' }}>
                      <strong>
                        <span data-custom-class="heading_1">
                          1. WHAT INFORMATION DO WE COLLECT?
                        </span>
                      </strong>
                      <span data-custom-class="heading_1">
                        <bdt className="block-component">
                          <span data-custom-class="body_text" />
                        </bdt>
                      </span>
                      <bdt className="block-component" />
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <div style={{ lineHeight: '1.5' }}>
            <span
              data-custom-class="heading_2"
              style={{ color: 'rgb(0, 0, 0)' }}
            >
              <span style={{ fontSize: 15 }}>
                <strong>
                  <u>
                    <br />
                  </u>
                </strong>
                <strong>Information automatically collected</strong>
              </span>
            </span>
          </div>
          <div>
            <div>
              <br />
            </div>
            <div style={{ lineHeight: '1.5' }}>
              <span style={{ color: 'rgb(127, 127, 127)' }}>
                <span style={{ color: 'rgb(89, 89, 89)', fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                      <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                        <span data-custom-class="body_text">
                          <strong>
                            <em>In Short:&nbsp;</em>
                          </strong>
                        </span>
                      </span>
                    </span>
                  </span>
                  <span data-custom-class="body_text">
                    <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                      <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                        <span data-custom-class="body_text">
                          <strong>
                            <em>&nbsp;</em>
                          </strong>
                          <em>
                            Some information — such as your Internet Protocol
                            (IP) address and/or browser and device
                            characteristics — is collected automatically when
                            you visit our{' '}
                            <span data-custom-class="body_text">
                              <em>
                                <span data-custom-class="body_text">
                                  <span style={{ fontSize: 15 }}>
                                    <span data-custom-class="body_text">
                                      <bdt className="block-component" />
                                      Website
                                      <bdt className="statement-end-if-in-editor" />
                                      <bdt className="block-component" />
                                      <bdt className="block-component" />
                                    </span>
                                  </span>
                                </span>
                              </em>
                            </span>
                            .
                          </em>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </div>
          </div>
          <div style={{ lineHeight: '1.5' }}>
            <br />
          </div>
          <div style={{ lineHeight: '1.5' }}>
            <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
              <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                <span data-custom-class="body_text">
                  We automatically collect certain information when you visit,
                  use or navigate the{' '}
                  <span style={{ fontSize: 15 }}>
                    <span data-custom-class="body_text">
                      <bdt className="block-component" />
                      Website
                      <bdt className="statement-end-if-in-editor" />
                      <bdt className="block-component" />
                      <bdt className="block-component" />
                    </span>
                  </span>
                  . This information does not reveal your specific identity
                  (like your name or contact information) but may include device
                  and usage information, such as your IP address, browser and
                  device characteristics, operating system, language
                  preferences, referring URLs, device name, country, location,
                  information about how and when you use our{' '}
                  <span style={{ fontSize: 15 }}>
                    <span data-custom-class="body_text">
                      <bdt className="block-component" />
                      Website
                      <bdt className="statement-end-if-in-editor" />
                      <bdt className="block-component" />
                      <bdt className="block-component" />
                    </span>
                  </span>{' '}
                  and other technical information. This information is primarily
                  needed to maintain the security and operation of our{' '}
                  <span style={{ fontSize: 15 }}>
                    <span data-custom-class="body_text">
                      <bdt className="block-component" />
                      Website
                      <bdt className="statement-end-if-in-editor" />
                      <bdt className="block-component" />
                      <bdt className="block-component" />
                    </span>
                  </span>
                  , and for our internal analytics and reporting purposes.
                  <bdt className="block-component" />
                </span>
                <bdt className="block-component" />
              </span>
            </span>
          </div>
          <div style={{ lineHeight: '1.5' }}>
            <br />
          </div>
          <div style={{ lineHeight: '1.5' }}>
            <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
              <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                <span data-custom-class="body_text">
                  The information we collect includes:
                  <bdt className="block-component" />
                </span>
              </span>
            </span>
          </div>
          <ul>
            <li style={{ lineHeight: '1.5' }}>
              <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                  <span data-custom-class="body_text">
                    <em>Log and Usage Data.</em> Log and usage data is
                    service-related, diagnostic, usage and performance
                    information our servers automatically collect when you
                    access or use our{' '}
                    <span style={{ fontSize: 15 }}>
                      <span style={{ color: 'rgb(89, 89, 89)' }}>
                        <span data-custom-class="body_text">
                          <span style={{ fontSize: 15 }}>
                            <span data-custom-class="body_text">
                              <bdt className="block-component" />
                              Website
                              <bdt className="statement-end-if-in-editor" />
                              <bdt className="block-component" />
                              <bdt className="block-component" />
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>{' '}
                    and which we record in log files. Depending on how you
                    interact with us, this log data may include your IP address,
                    device information, browser type and settings and
                    information about your activity in the{' '}
                    <span style={{ fontSize: 15 }}>
                      <span style={{ color: 'rgb(89, 89, 89)' }}>
                        <span data-custom-class="body_text">
                          <span style={{ fontSize: 15 }}>
                            <span data-custom-class="body_text">
                              <bdt className="block-component" />
                              Website
                              <bdt className="statement-end-if-in-editor" />
                              <bdt className="block-component" />
                              <bdt className="block-component" />
                            </span>
                          </span>
                        </span>
                      </span>
                      &nbsp;
                    </span>
                    (such as the date/time stamps associated with your usage,
                    pages and files viewed, searches and other actions you take
                    such as which features you use), device event information
                    (such as system activity, error reports (sometimes called
                    'crash dumps') and hardware settings).
                    <span style={{ fontSize: 15 }}>
                      <span style={{ color: 'rgb(89, 89, 89)' }}>
                        <span data-custom-class="body_text">
                          <span style={{ fontSize: 15 }}>
                            <span style={{ color: 'rgb(89, 89, 89)' }}>
                              <bdt className="statement-end-if-in-editor" />
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </li>
          </ul>
          <div>
            <bdt className="block-component">
              <span style={{ fontSize: 15 }} />
            </bdt>
          </div>
          <ul>
            <li style={{ lineHeight: '1.5' }}>
              <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                  <span data-custom-class="body_text">
                    <em>Device Data.</em> We collect device data such as
                    information about your computer, phone, tablet or other
                    device you use to access the{' '}
                    <span style={{ fontSize: 15 }}>
                      <span data-custom-class="body_text">
                        <bdt className="block-component" />
                        Website
                        <bdt className="statement-end-if-in-editor" />
                        <bdt className="block-component" />
                        <bdt className="block-component" />
                      </span>
                    </span>
                    . Depending on the device used, this device data may include
                    information such as your IP address (or proxy server),
                    device and application identification numbers, location,
                    browser type, hardware model Internet service provider
                    and/or mobile carrier, operating system and system
                    configuration information.
                    <span style={{ fontSize: 15 }}>
                      <span style={{ color: 'rgb(89, 89, 89)' }}>
                        <span data-custom-class="body_text">
                          <span style={{ fontSize: 15 }}>
                            <span style={{ color: 'rgb(89, 89, 89)' }}>
                              <bdt className="statement-end-if-in-editor" />
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </li>
          </ul>
          <div>
            <bdt className="block-component">
              <span style={{ fontSize: 15 }} />
            </bdt>
          </div>
          <ul>
            <li style={{ lineHeight: '1.5' }}>
              <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                  <span data-custom-class="body_text">
                    <em>Location Data.</em> We collect location data such as
                    information about your device's location, which can be
                    either precise or imprecise. How much information we collect
                    depends on the type and settings of the device you use to
                    access the{' '}
                    <span style={{ fontSize: 15 }}>
                      <span style={{ color: 'rgb(89, 89, 89)' }}>
                        <span data-custom-class="body_text">
                          <span style={{ fontSize: 15 }}>
                            <span data-custom-class="body_text">
                              <bdt className="block-component" />
                              Website
                              <bdt className="statement-end-if-in-editor" />
                              <bdt className="block-component" />
                              <bdt className="block-component" />
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                    . For example, we may use GPS and other technologies to
                    collect geolocation data that tells us your current location
                    (based on your IP address). You can opt out of allowing us
                    to collect this information either by refusing access to the
                    information or by disabling your Location setting on your
                    device. Note however, if you choose to opt out, you may not
                    be able to use certain aspects of the Services.
                    <span style={{ fontSize: 15 }}>
                      <span style={{ color: 'rgb(89, 89, 89)' }}>
                        <span data-custom-class="body_text">
                          <span style={{ fontSize: 15 }}>
                            <span style={{ color: 'rgb(89, 89, 89)' }}>
                              <bdt className="statement-end-if-in-editor" />
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </li>
          </ul>
          <div>
            <bdt className="block-component">
              <span style={{ fontSize: 15 }} />
            </bdt>
            <bdt className="statement-end-if-in-editor" />
            <span data-custom-class="body_text">
              <span style={{ fontSize: 15 }}>
                <bdt className="statement-end-if-in-editor">
                  <bdt className="statement-end-if-in-editor">
                    <span style={{ fontSize: 15 }}>
                      <span data-custom-class="body_text">
                        <span style={{ fontSize: 15 }}>
                          <span data-custom-class="body_text">
                            <bdt className="statement-end-if-in-editor">
                              <bdt className="statement-end-if-in-editor">
                                <bdt className="block-component" />
                              </bdt>
                            </bdt>
                          </span>
                        </span>
                      </span>
                    </span>
                    <span style={{ color: 'rgb(89, 89, 89)', fontSize: 15 }}>
                      <span data-custom-class="body_text">
                        <span
                          style={{ color: 'rgb(89, 89, 89)', fontSize: 15 }}
                        >
                          <span data-custom-class="body_text">
                            <bdt className="statement-end-if-in-editor">
                              <bdt className="block-component" />
                            </bdt>
                          </span>
                        </span>
                      </span>
                    </span>
                  </bdt>
                </bdt>
              </span>
            </span>
            <bdt className="block-component" />
          </div>
          <div style={{ lineHeight: '1.5' }}>
            <br />
          </div>
          <div id="infouse" style={{ lineHeight: '1.5' }}>
            <span style={{ color: 'rgb(127, 127, 127)' }}>
              <span style={{ color: 'rgb(89, 89, 89)', fontSize: 15 }}>
                <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                  <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                    <span id="control" style={{ color: 'rgb(0, 0, 0)' }}>
                      <strong>
                        <span data-custom-class="heading_1">
                          2. HOW DO WE USE YOUR INFORMATION?
                        </span>
                      </strong>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <div>
            <div style={{ lineHeight: '1.5' }}>
              <br />
            </div>
            <div style={{ lineHeight: '1.5' }}>
              <span style={{ color: 'rgb(127, 127, 127)' }}>
                <span style={{ color: 'rgb(89, 89, 89)', fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                      <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                        <span data-custom-class="body_text">
                          <strong>
                            <em>In Short: &nbsp;</em>
                          </strong>
                          <em>
                            We process your information for purposes based on
                            legitimate business interests, the fulfillment of
                            our contract with you, compliance with our legal
                            obligations, and/or your consent.
                          </em>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </div>
          </div>
          <div style={{ lineHeight: '1.5' }}>
            <br />
          </div>
          <div style={{ lineHeight: '1.5' }}>
            <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
              <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                <span data-custom-class="body_text">
                  We use personal information collected via our{' '}
                  <span style={{ fontSize: 15 }}>
                    <span data-custom-class="body_text">
                      <bdt className="block-component" />
                      Website
                      <bdt className="statement-end-if-in-editor" />
                      <bdt className="block-component" />
                      <bdt className="block-component" />
                    </span>
                  </span>{' '}
                  for a variety of business purposes described below. We process
                  your personal information for these purposes in reliance on
                  our legitimate business interests, in order to enter into or
                  perform a contract with you, with your consent, and/or for
                  compliance with our legal obligations. We indicate the
                  specific processing grounds we rely on next to each purpose
                  listed below.
                  <bdt className="block-component" />
                </span>
              </span>
            </span>
          </div>
          <div style={{ lineHeight: '1.5' }}>
            <br />
          </div>
          <div style={{ lineHeight: '1.5' }}>
            <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
              <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                <span data-custom-class="body_text">
                  We use the information we collect or receive:
                  <bdt className="block-component" />
                </span>
              </span>
            </span>
          </div>
          <ul>
            <li style={{ lineHeight: '1.5' }}>
              <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                  <span data-custom-class="body_text">
                    <strong>
                      To facilitate account creation and logon process.
                    </strong>{' '}
                    If you choose to link your account with us to a third-party
                    account (such as your Google or Facebook account), we use
                    the information you allowed us to collect from those third
                    parties to facilitate account creation and logon process for
                    the performance of the contract.
                    <span style={{ color: 'rgb(89, 89, 89)', fontSize: 15 }}>
                      <span style={{ fontSize: 15 }}>
                        <span style={{ color: 'rgb(89, 89, 89)' }}>
                          <span data-custom-class="body_text">
                            <bdt className="block-component">
                              <span
                                style={{
                                  fontSize: 15,
                                  color: 'rgb(89, 89, 89)',
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: 15,
                                    color: 'rgb(89, 89, 89)',
                                  }}
                                >
                                  <span data-custom-class="body_text">
                                    <span
                                      style={{
                                        fontSize: 15,
                                        color: 'rgb(89, 89, 89)',
                                      }}
                                    >
                                      <span
                                        style={{
                                          fontSize: 15,
                                          color: 'rgb(89, 89, 89)',
                                        }}
                                      >
                                        <span data-custom-class="body_text">
                                          <span style={{ fontSize: 15 }}>
                                            <span
                                              style={{
                                                color: 'rgb(89, 89, 89)',
                                              }}
                                            >
                                              <span data-custom-class="body_text">
                                                <span style={{ fontSize: 15 }}>
                                                  <span
                                                    style={{
                                                      color: 'rgb(89, 89, 89)',
                                                    }}
                                                  >
                                                    <span data-custom-class="body_text">
                                                      <bdt className="statement-end-if-in-editor" />
                                                    </span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </bdt>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </li>
          </ul>
          <div>
            <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
              <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                <span data-custom-class="body_text">
                  <bdt className="block-component" />
                </span>
              </span>
            </span>
          </div>
          <ul>
            <li style={{ lineHeight: '1.5' }}>
              <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                  <span data-custom-class="body_text">
                    <strong>To post testimonials.</strong> We post testimonials
                    on our{' '}
                    <span style={{ fontSize: 15 }}>
                      <span style={{ color: 'rgb(89, 89, 89)' }}>
                        <span data-custom-class="body_text">
                          <span style={{ fontSize: 15 }}>
                            <span style={{ color: 'rgb(89, 89, 89)' }}>
                              <span data-custom-class="body_text">
                                <bdt className="block-component" />
                                Website
                                <bdt className="statement-end-if-in-editor" />
                                <bdt className="block-component" />
                                <bdt className="block-component" />
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>{' '}
                    that may contain personal information. Prior to posting a
                    testimonial, we will obtain your consent to use your name
                    and the content of the testimonial. If you wish to update,
                    or delete your testimonial, please contact us at{' '}
                    <span style={{ fontSize: 15 }}>
                      <span style={{ color: 'rgb(89, 89, 89)' }}>
                        <span data-custom-class="body_text">
                          <bdt className="block-component" />
                          <bdt className="question">contact@mediaedits.io</bdt>
                          <bdt className="else-block" />
                        </span>
                      </span>
                    </span>{' '}
                    and be sure to include your name, testimonial location, and
                    contact information.
                    <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                      <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                        <span data-custom-class="body_text">
                          <span
                            style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}
                          >
                            <span
                              style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}
                            >
                              <span data-custom-class="body_text">
                                <span style={{ fontSize: 15 }}>
                                  <span style={{ color: 'rgb(89, 89, 89)' }}>
                                    <span data-custom-class="body_text">
                                      <span style={{ fontSize: 15 }}>
                                        <span
                                          style={{ color: 'rgb(89, 89, 89)' }}
                                        >
                                          <span data-custom-class="body_text">
                                            <bdt className="statement-end-if-in-editor" />
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </li>
          </ul>
          <div>
            <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
              <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                <span data-custom-class="body_text">
                  <bdt className="block-component" />
                </span>
              </span>
            </span>
          </div>
          <ul>
            <li style={{ lineHeight: '1.5' }}>
              <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                  <span data-custom-class="body_text">
                    <strong>Request feedback.&nbsp;</strong>We may use your
                    information to request feedback and to contact you about
                    your use of our{' '}
                    <span style={{ fontSize: 15 }}>
                      <span style={{ color: 'rgb(89, 89, 89)' }}>
                        <span data-custom-class="body_text">
                          <span style={{ fontSize: 15 }}>
                            <span style={{ color: 'rgb(89, 89, 89)' }}>
                              <span data-custom-class="body_text">
                                <bdt className="block-component" />
                                Website
                                <bdt className="statement-end-if-in-editor" />
                                <bdt className="block-component" />
                                <bdt className="block-component" />
                              </span>
                            </span>
                          </span>
                          .
                          <span
                            style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}
                          >
                            <span
                              style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}
                            >
                              <span data-custom-class="body_text">
                                <span
                                  style={{
                                    fontSize: 15,
                                    color: 'rgb(89, 89, 89)',
                                  }}
                                >
                                  <span
                                    style={{
                                      fontSize: 15,
                                      color: 'rgb(89, 89, 89)',
                                    }}
                                  >
                                    <span data-custom-class="body_text">
                                      <span
                                        style={{
                                          fontSize: 15,
                                          color: 'rgb(89, 89, 89)',
                                        }}
                                      >
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: 'rgb(89, 89, 89)',
                                          }}
                                        >
                                          <span data-custom-class="body_text">
                                            <span style={{ fontSize: 15 }}>
                                              <span
                                                style={{
                                                  color: 'rgb(89, 89, 89)',
                                                }}
                                              >
                                                <span data-custom-class="body_text">
                                                  <span
                                                    style={{ fontSize: 15 }}
                                                  >
                                                    <span
                                                      style={{
                                                        color:
                                                          'rgb(89, 89, 89)',
                                                      }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        <bdt className="statement-end-if-in-editor" />
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </li>
          </ul>
          <div>
            <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
              <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                <span data-custom-class="body_text">
                  <bdt className="block-component" />
                </span>
              </span>
            </span>
          </div>
          <ul>
            <li style={{ lineHeight: '1.5' }}>
              <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                  <span data-custom-class="body_text">
                    <strong>To enable user-to-user communications.</strong> We
                    may use your information in order to enable user-to-user
                    communications with each user's consent.
                    <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                      <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                        <span data-custom-class="body_text">
                          <span style={{ fontSize: 15 }}>
                            <span style={{ color: 'rgb(89, 89, 89)' }}>
                              <span data-custom-class="body_text">
                                <span style={{ fontSize: 15 }}>
                                  <span style={{ color: 'rgb(89, 89, 89)' }}>
                                    <span data-custom-class="body_text">
                                      <bdt className="statement-end-if-in-editor" />
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </li>
          </ul>
          <div>
            <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
              <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                <span data-custom-class="body_text">
                  <bdt className="block-component" />
                </span>
              </span>
            </span>
          </div>
          <ul>
            <li style={{ lineHeight: '1.5' }}>
              <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                <span style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}>
                  <span data-custom-class="body_text">
                    <strong>To manage user accounts.&nbsp;</strong>We may use
                    your information for the purposes of managing our account
                    and keeping it in working order.
                    <bdt className="statement-end-if-in-editor" />
                  </span>
                </span>
              </span>
            </li>
          </ul>
          <div>
            <bdt className="block-component" />
            <div>
              <bdt className="block-component" />
              <div>
                <bdt className="block-component" />
                <div>
                  <bdt className="block-component" />
                  <p style={{ fontSize: 15 }}>
                    <bdt className="block-component" />
                  </p>
                  <p style={{ fontSize: 15 }}>
                    <bdt className="block-component" />
                  </p>
                  <p style={{ fontSize: 15 }}>
                    <bdt className="block-component" />
                  </p>
                  <p style={{ fontSize: 15 }}>
                    <bdt className="block-component" />
                  </p>
                  <div>
                    <bdt className="block-component">
                      <span style={{ fontSize: 15 }} />
                    </bdt>
                    <div>
                      <bdt className="block-component">
                        <span style={{ fontSize: 15 }} />
                      </bdt>
                      <div>
                        <bdt className="block-component">
                          <span style={{ fontSize: 15 }} />
                        </bdt>
                        <div>
                          <span style={{ fontSize: 15 }}>
                            <bdt className="block-component" />
                          </span>
                          <bdt className="statement-end-if-in-editor">
                            <span style={{ fontSize: 15 }} />
                          </bdt>
                        </div>
                        <div style={{ lineHeight: '1.5' }}>
                          <br />
                        </div>
                        <div id="infoshare" style={{ lineHeight: '1.5' }}>
                          <span style={{ color: 'rgb(127, 127, 127)' }}>
                            <span
                              style={{ color: 'rgb(89, 89, 89)', fontSize: 15 }}
                            >
                              <span
                                style={{
                                  fontSize: 15,
                                  color: 'rgb(89, 89, 89)',
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: 15,
                                    color: 'rgb(89, 89, 89)',
                                  }}
                                >
                                  <span
                                    id="control"
                                    style={{ color: 'rgb(0, 0, 0)' }}
                                  >
                                    <strong>
                                      <span data-custom-class="heading_1">
                                        3. WILL YOUR INFORMATION BE SHARED WITH
                                        ANYONE?
                                      </span>
                                    </strong>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </div>
                        <div style={{ lineHeight: '1.5' }}>
                          <br />
                        </div>
                        <div style={{ lineHeight: '1.5' }}>
                          <span
                            style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}
                          >
                            <span
                              style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}
                            >
                              <span data-custom-class="body_text">
                                <strong>
                                  <em>In Short:</em>
                                </strong>
                                <em>
                                  &nbsp; We only share information with your
                                  consent, to comply with laws, to provide you
                                  with services, to protect your rights, or to
                                  fulfill business obligations.
                                </em>
                              </span>
                            </span>
                          </span>
                        </div>
                        <div style={{ lineHeight: '1.5' }}>
                          <br />
                        </div>
                        <div style={{ lineHeight: '1.5' }}>
                          <span
                            style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}
                          >
                            <span
                              style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}
                            >
                              <span data-custom-class="body_text">
                                We may process or share your data that we hold
                                based on the following legal basis:
                                <bdt className="block-component" />
                              </span>
                            </span>
                          </span>
                        </div>
                        <ul>
                          <li style={{ lineHeight: '1.5' }}>
                            <span
                              style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}
                            >
                              <span
                                style={{
                                  fontSize: 15,
                                  color: 'rgb(89, 89, 89)',
                                }}
                              >
                                <span data-custom-class="body_text">
                                  <strong>Consent:</strong> We may process your
                                  data if you have given us specific consent to
                                  use your personal information for a specific
                                  purpose.
                                  <span
                                    style={{
                                      fontSize: 15,
                                      color: 'rgb(89, 89, 89)',
                                    }}
                                  >
                                    <span
                                      style={{
                                        fontSize: 15,
                                        color: 'rgb(89, 89, 89)',
                                      }}
                                    >
                                      <span data-custom-class="body_text">
                                        <bdt className="statement-end-if-in-editor" />
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </li>
                        </ul>
                        <div>
                          <span
                            style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}
                          >
                            <span
                              style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}
                            >
                              <span data-custom-class="body_text">
                                <span
                                  style={{
                                    fontSize: 15,
                                    color: 'rgb(89, 89, 89)',
                                  }}
                                >
                                  <span
                                    style={{
                                      fontSize: 15,
                                      color: 'rgb(89, 89, 89)',
                                    }}
                                  >
                                    <span data-custom-class="body_text">
                                      <bdt className="statement-end-if-in-editor">
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: 'rgb(89, 89, 89)',
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: 15,
                                              color: 'rgb(89, 89, 89)',
                                            }}
                                          >
                                            <span data-custom-class="body_text">
                                              <bdt className="block-component" />
                                            </span>
                                          </span>
                                        </span>
                                      </bdt>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </div>
                        <ul>
                          <li style={{ lineHeight: '1.5' }}>
                            <span
                              style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}
                            >
                              <span
                                style={{
                                  fontSize: 15,
                                  color: 'rgb(89, 89, 89)',
                                }}
                              >
                                <span data-custom-class="body_text">
                                  <strong>Legitimate Interests:</strong> We may
                                  process your data when it is reasonably
                                  necessary to achieve our legitimate business
                                  interests.
                                  <span
                                    style={{
                                      fontSize: 15,
                                      color: 'rgb(89, 89, 89)',
                                    }}
                                  >
                                    <span
                                      style={{
                                        fontSize: 15,
                                        color: 'rgb(89, 89, 89)',
                                      }}
                                    >
                                      <span data-custom-class="body_text">
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: 'rgb(89, 89, 89)',
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: 15,
                                              color: 'rgb(89, 89, 89)',
                                            }}
                                          >
                                            <span data-custom-class="body_text">
                                              <bdt className="statement-end-if-in-editor" />
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </li>
                        </ul>
                        <div>
                          <span
                            style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}
                          >
                            <span
                              style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}
                            >
                              <span data-custom-class="body_text">
                                <span
                                  style={{
                                    fontSize: 15,
                                    color: 'rgb(89, 89, 89)',
                                  }}
                                >
                                  <span
                                    style={{
                                      fontSize: 15,
                                      color: 'rgb(89, 89, 89)',
                                    }}
                                  >
                                    <span data-custom-class="body_text">
                                      <bdt className="block-component" />
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </div>
                        <ul>
                          <li style={{ lineHeight: '1.5' }}>
                            <span
                              style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}
                            >
                              <span
                                style={{
                                  fontSize: 15,
                                  color: 'rgb(89, 89, 89)',
                                }}
                              >
                                <span data-custom-class="body_text">
                                  <strong>Performance of a Contract:</strong>{' '}
                                  Where we have entered into a contract with
                                  you, we may process your personal information
                                  to fulfill the terms of our contract.
                                  <span
                                    style={{
                                      fontSize: 15,
                                      color: 'rgb(89, 89, 89)',
                                    }}
                                  >
                                    <span
                                      style={{
                                        fontSize: 15,
                                        color: 'rgb(89, 89, 89)',
                                      }}
                                    >
                                      <span data-custom-class="body_text">
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: 'rgb(89, 89, 89)',
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: 15,
                                              color: 'rgb(89, 89, 89)',
                                            }}
                                          >
                                            <span data-custom-class="body_text">
                                              <bdt className="statement-end-if-in-editor" />
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </li>
                        </ul>
                        <div>
                          <span
                            style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}
                          >
                            <span
                              style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}
                            >
                              <span data-custom-class="body_text">
                                <span
                                  style={{
                                    fontSize: 15,
                                    color: 'rgb(89, 89, 89)',
                                  }}
                                >
                                  <span
                                    style={{
                                      fontSize: 15,
                                      color: 'rgb(89, 89, 89)',
                                    }}
                                  >
                                    <span data-custom-class="body_text">
                                      <bdt className="block-component" />
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </div>
                        <ul>
                          <li style={{ lineHeight: '1.5' }}>
                            <span
                              style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}
                            >
                              <span
                                style={{
                                  fontSize: 15,
                                  color: 'rgb(89, 89, 89)',
                                }}
                              >
                                <span data-custom-class="body_text">
                                  <strong>Legal Obligations:</strong> We may
                                  disclose your information where we are legally
                                  required to do so in order to comply with
                                  applicable law, governmental requests, a
                                  judicial proceeding, court order, or legal
                                  process, such as in response to a court order
                                  or a subpoena (including in response to public
                                  authorities to meet national security or law
                                  enforcement requirements).
                                  <span
                                    style={{
                                      fontSize: 15,
                                      color: 'rgb(89, 89, 89)',
                                    }}
                                  >
                                    <span
                                      style={{
                                        fontSize: 15,
                                        color: 'rgb(89, 89, 89)',
                                      }}
                                    >
                                      <span data-custom-class="body_text">
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: 'rgb(89, 89, 89)',
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: 15,
                                              color: 'rgb(89, 89, 89)',
                                            }}
                                          >
                                            <span data-custom-class="body_text">
                                              <bdt className="statement-end-if-in-editor" />
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </li>
                        </ul>
                        <div>
                          <span
                            style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}
                          >
                            <span
                              style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}
                            >
                              <span data-custom-class="body_text">
                                <span
                                  style={{
                                    fontSize: 15,
                                    color: 'rgb(89, 89, 89)',
                                  }}
                                >
                                  <span
                                    style={{
                                      fontSize: 15,
                                      color: 'rgb(89, 89, 89)',
                                    }}
                                  >
                                    <span data-custom-class="body_text">
                                      <bdt className="block-component" />
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </div>
                        <ul>
                          <li style={{ lineHeight: '1.5' }}>
                            <span
                              style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}
                            >
                              <span
                                style={{
                                  fontSize: 15,
                                  color: 'rgb(89, 89, 89)',
                                }}
                              >
                                <span data-custom-class="body_text">
                                  <strong>Vital Interests:</strong> We may
                                  disclose your information where we believe it
                                  is necessary to investigate, prevent, or take
                                  action regarding potential violations of our
                                  policies, suspected fraud, situations
                                  involving potential threats to the safety of
                                  any person and illegal activities, or as
                                  evidence in litigation in which we are
                                  involved.
                                  <span
                                    style={{
                                      fontSize: 15,
                                      color: 'rgb(89, 89, 89)',
                                    }}
                                  >
                                    <span
                                      style={{
                                        fontSize: 15,
                                        color: 'rgb(89, 89, 89)',
                                      }}
                                    >
                                      <span data-custom-class="body_text">
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: 'rgb(89, 89, 89)',
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: 15,
                                              color: 'rgb(89, 89, 89)',
                                            }}
                                          >
                                            <span data-custom-class="body_text">
                                              <bdt className="statement-end-if-in-editor" />
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </li>
                        </ul>
                        <div style={{ lineHeight: '1.5' }}>
                          <span
                            style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}
                          >
                            <span
                              style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}
                            >
                              <span data-custom-class="body_text">
                                More specifically, we may need to process your
                                data or share your personal information in the
                                following situations:
                              </span>
                            </span>
                          </span>
                        </div>
                        <ul>
                          <li style={{ lineHeight: '1.5' }}>
                            <span
                              style={{ fontSize: 15, color: 'rgb(89, 89, 89)' }}
                            >
                              <span
                                style={{
                                  fontSize: 15,
                                  color: 'rgb(89, 89, 89)',
                                }}
                              >
                                <span data-custom-class="body_text">
                                  <strong>Business Transfers.</strong> We may
                                  share or transfer your information in
                                  connection with, or during negotiations of,
                                  any merger, sale of company assets, financing,
                                  or acquisition of all or a portion of our
                                  business to another company.
                                </span>
                              </span>
                            </span>
                          </li>
                        </ul>
                        <div>
                          <span style={{ fontSize: 15 }}>
                            <span style={{ color: 'rgb(89, 89, 89)' }}>
                              <span data-custom-class="body_text">
                                <bdt className="block-component" />
                              </span>
                            </span>
                          </span>
                          <div>
                            <span style={{ fontSize: 15 }}>
                              <span style={{ color: 'rgb(89, 89, 89)' }}>
                                <span data-custom-class="body_text">
                                  <bdt className="block-component" />
                                </span>
                              </span>
                            </span>
                            <div>
                              <span style={{ fontSize: 15 }}>
                                <span style={{ color: 'rgb(89, 89, 89)' }}>
                                  <span style={{ fontSize: 15 }}>
                                    <span style={{ color: 'rgb(89, 89, 89)' }}>
                                      <span data-custom-class="body_text">
                                        <bdt className="block-component" />
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                              <div>
                                <span style={{ fontSize: 15 }}>
                                  <span style={{ color: 'rgb(89, 89, 89)' }}>
                                    <span data-custom-class="body_text">
                                      <bdt className="block-component" />
                                    </span>
                                  </span>
                                </span>
                                <div>
                                  <span style={{ fontSize: 15 }}>
                                    <span style={{ color: 'rgb(89, 89, 89)' }}>
                                      <span data-custom-class="body_text">
                                        <bdt className="block-component" />
                                      </span>
                                    </span>
                                  </span>
                                  <div>
                                    <span style={{ fontSize: 15 }}>
                                      <span
                                        style={{ color: 'rgb(89, 89, 89)' }}
                                      >
                                        <span style={{ fontSize: 15 }}>
                                          <span data-custom-class="body_text">
                                            <bdt className="block-component" />
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <span
                                        style={{ color: 'rgb(89, 89, 89)' }}
                                      >
                                        <bdt className="block-component" />
                                      </span>
                                    </div>
                                    <div>
                                      <span
                                        style={{
                                          color: 'rgb(89, 89, 89)',
                                          fontSize: 15,
                                        }}
                                      >
                                        <span style={{ fontSize: 15 }}>
                                          <span
                                            style={{ color: 'rgb(89, 89, 89)' }}
                                          >
                                            <span style={{ fontSize: 15 }}>
                                              <span
                                                style={{
                                                  color: 'rgb(89, 89, 89)',
                                                }}
                                              >
                                                <bdt className="block-component">
                                                  <span data-custom-class="heading_1" />
                                                </bdt>
                                              </span>
                                              <span data-custom-class="body_text">
                                                <bdt className="block-component" />
                                                <bdt className="block-component" />
                                              </span>
                                              <bdt className="block-component">
                                                <span data-custom-class="body_text">
                                                  <bdt className="block-component" />
                                                </span>
                                              </bdt>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <br />
                                    </div>
                                    <div
                                      id="intltransfers"
                                      style={{ lineHeight: '1.5' }}
                                    >
                                      <span
                                        style={{ color: 'rgb(127, 127, 127)' }}
                                      >
                                        <span
                                          style={{
                                            color: 'rgb(89, 89, 89)',
                                            fontSize: 15,
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: 15,
                                              color: 'rgb(89, 89, 89)',
                                            }}
                                          >
                                            <span
                                              style={{
                                                fontSize: 15,
                                                color: 'rgb(89, 89, 89)',
                                              }}
                                            >
                                              <span
                                                id="control"
                                                style={{
                                                  color: 'rgb(0, 0, 0)',
                                                }}
                                              >
                                                <strong>
                                                  <span data-custom-class="heading_1">
                                                    4. IS YOUR INFORMATION
                                                    TRANSFERRED INTERNATIONALLY?
                                                  </span>
                                                </strong>
                                                &nbsp;
                                              </span>
                                              &nbsp;
                                            </span>
                                            &nbsp;
                                          </span>
                                          &nbsp;
                                        </span>
                                        &nbsp;
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <br />
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <span
                                        style={{
                                          fontSize: 15,
                                          color: 'rgb(89, 89, 89)',
                                        }}
                                      >
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: 'rgb(89, 89, 89)',
                                          }}
                                        >
                                          <span data-custom-class="body_text">
                                            <strong>
                                              <em>In Short: &nbsp;</em>
                                            </strong>
                                            <em>
                                              We may transfer, store, and
                                              process your information in
                                              countries other than your own.
                                            </em>
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <br />
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <span
                                        style={{
                                          fontSize: 15,
                                          color: 'rgb(89, 89, 89)',
                                        }}
                                      >
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: 'rgb(89, 89, 89)',
                                          }}
                                        >
                                          <span data-custom-class="body_text">
                                            Our servers are located in
                                            <span style={{ fontSize: 15 }}>
                                              <span
                                                style={{
                                                  color: 'rgb(89, 89, 89)',
                                                }}
                                              >
                                                <span data-custom-class="body_text">
                                                  <bdt className="forloop-component" />
                                                </span>
                                              </span>
                                            </span>
                                            . If you are accessing our{' '}
                                            <span style={{ fontSize: 15 }}>
                                              <span
                                                style={{
                                                  color: 'rgb(89, 89, 89)',
                                                }}
                                              >
                                                <span data-custom-class="body_text">
                                                  <span
                                                    style={{
                                                      color: 'rgb(89, 89, 89)',
                                                      fontSize: 15,
                                                    }}
                                                  >
                                                    <span data-custom-class="body_text">
                                                      <span
                                                        style={{ fontSize: 15 }}
                                                      >
                                                        <span
                                                          style={{
                                                            color:
                                                              'rgb(89, 89, 89)',
                                                          }}
                                                        >
                                                          <span data-custom-class="body_text">
                                                            <span
                                                              style={{
                                                                fontSize: 15,
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  color:
                                                                    'rgb(89, 89, 89)',
                                                                }}
                                                              >
                                                                <span data-custom-class="body_text">
                                                                  <bdt className="block-component" />
                                                                  Website
                                                                  <bdt className="statement-end-if-in-editor" />
                                                                  <bdt className="block-component" />
                                                                  <bdt className="block-component" />
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>{' '}
                                            from outside
                                            <span style={{ fontSize: 15 }}>
                                              <span
                                                style={{
                                                  color: 'rgb(89, 89, 89)',
                                                }}
                                              >
                                                <span data-custom-class="body_text">
                                                  <bdt className="forloop-component" />
                                                </span>
                                              </span>
                                            </span>
                                            , please be aware that your
                                            information may be transferred to,
                                            stored, and processed by us in our
                                            facilities and by those third
                                            parties with whom we may share your
                                            personal information (see "
                                            <a
                                              data-custom-class="link"
                                              href="#infoshare"
                                            >
                                              <span style={{ fontSize: 15 }}>
                                                <span
                                                  style={{
                                                    color: 'rgb(89, 89, 89)',
                                                  }}
                                                >
                                                  WILL YOUR INFORMATION BE
                                                  SHARED WITH ANYONE?
                                                </span>
                                              </span>
                                            </a>
                                            " above), in{' '}
                                            <span style={{ fontSize: 15 }}>
                                              <span
                                                style={{
                                                  color: 'rgb(89, 89, 89)',
                                                }}
                                              >
                                                <span data-custom-class="body_text">
                                                  <bdt className="forloop-component" />
                                                </span>
                                              </span>
                                            </span>{' '}
                                            and other countries.
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <br />
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <span
                                        style={{
                                          fontSize: 15,
                                          color: 'rgb(89, 89, 89)',
                                        }}
                                      >
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: 'rgb(89, 89, 89)',
                                          }}
                                        >
                                          <span data-custom-class="body_text">
                                            If you are a resident in the
                                            European Economic Area, then these
                                            countries may not necessarily have
                                            data protection laws or other
                                            similar laws as comprehensive as
                                            those in your country. We will
                                            however take all necessary measures
                                            to protect your personal information
                                            in accordance with this privacy
                                            notice and applicable law.
                                            <span style={{ fontSize: 15 }}>
                                              <span
                                                style={{
                                                  color: 'rgb(89, 89, 89)',
                                                }}
                                              >
                                                <span data-custom-class="body_text">
                                                  <bdt className="block-component" />
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                      <span style={{ fontSize: 15 }}>
                                        <span
                                          style={{ color: 'rgb(89, 89, 89)' }}
                                        >
                                          <span data-custom-class="body_text">
                                            <bdt className="block-component" />
                                          </span>
                                        </span>
                                      </span>
                                      <span
                                        style={{
                                          fontSize: 15,
                                          color: 'rgb(89, 89, 89)',
                                        }}
                                      >
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: 'rgb(89, 89, 89)',
                                          }}
                                        >
                                          <span data-custom-class="body_text">
                                            <span style={{ fontSize: 15 }}>
                                              <span
                                                style={{
                                                  color: 'rgb(89, 89, 89)',
                                                }}
                                              >
                                                <span data-custom-class="body_text">
                                                  <bdt className="block-component" />
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: 'rgb(89, 89, 89)',
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: 15,
                                              color: 'rgb(89, 89, 89)',
                                            }}
                                          >
                                            <span data-custom-class="body_text">
                                              <span
                                                style={{
                                                  color: 'rgb(89, 89, 89)',
                                                  fontSize: 15,
                                                }}
                                              >
                                                <span
                                                  style={{
                                                    color: 'rgb(89, 89, 89)',
                                                    fontSize: 15,
                                                  }}
                                                >
                                                  <span
                                                    style={{
                                                      color: 'rgb(89, 89, 89)',
                                                      fontSize: 15,
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        color:
                                                          'rgb(89, 89, 89)',
                                                        fontSize: 15,
                                                      }}
                                                    >
                                                      <span
                                                        style={{
                                                          color:
                                                            'rgb(89, 89, 89)',
                                                          fontSize: 15,
                                                        }}
                                                      >
                                                        <span
                                                          style={{
                                                            fontSize: 15,
                                                          }}
                                                        >
                                                          <span
                                                            style={{
                                                              color:
                                                                'rgb(89, 89, 89)',
                                                            }}
                                                          >
                                                            <span
                                                              style={{
                                                                fontSize: 15,
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  color:
                                                                    'rgb(89, 89, 89)',
                                                                }}
                                                              >
                                                                <span data-custom-class="body_text">
                                                                  <bdt className="statement-end-if-in-editor">
                                                                    <span
                                                                      style={{
                                                                        color:
                                                                          'rgb(89, 89, 89)',
                                                                        fontSize: 15,
                                                                      }}
                                                                    >
                                                                      <span
                                                                        style={{
                                                                          color:
                                                                            'rgb(89, 89, 89)',
                                                                          fontSize: 15,
                                                                        }}
                                                                      >
                                                                        <span
                                                                          style={{
                                                                            color:
                                                                              'rgb(89, 89, 89)',
                                                                            fontSize: 15,
                                                                          }}
                                                                        >
                                                                          <span
                                                                            style={{
                                                                              color:
                                                                                'rgb(89, 89, 89)',
                                                                              fontSize: 15,
                                                                            }}
                                                                          >
                                                                            <span
                                                                              style={{
                                                                                color:
                                                                                  'rgb(89, 89, 89)',
                                                                                fontSize: 15,
                                                                              }}
                                                                            >
                                                                              <span
                                                                                style={{
                                                                                  fontSize: 15,
                                                                                }}
                                                                              >
                                                                                <span
                                                                                  style={{
                                                                                    color:
                                                                                      'rgb(89, 89, 89)',
                                                                                  }}
                                                                                >
                                                                                  <span
                                                                                    style={{
                                                                                      fontSize: 15,
                                                                                    }}
                                                                                  >
                                                                                    <span
                                                                                      style={{
                                                                                        color:
                                                                                          'rgb(89, 89, 89)',
                                                                                      }}
                                                                                    >
                                                                                      <span data-custom-class="body_text">
                                                                                        <bdt className="block-component" />
                                                                                      </span>
                                                                                    </span>
                                                                                  </span>
                                                                                </span>
                                                                              </span>
                                                                            </span>
                                                                          </span>
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </bdt>
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <span
                                        style={{
                                          fontSize: 15,
                                          color: 'rgb(89, 89, 89)',
                                        }}
                                      >
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: 'rgb(89, 89, 89)',
                                          }}
                                        >
                                          &nbsp;
                                        </span>
                                      </span>
                                    </div>
                                    <div>
                                      <span
                                        id="3pwebsites"
                                        style={{ color: 'rgb(127, 127, 127)' }}
                                      >
                                        <span
                                          style={{
                                            color: 'rgb(89, 89, 89)',
                                            fontSize: 15,
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: 15,
                                              color: 'rgb(89, 89, 89)',
                                            }}
                                          >
                                            <span
                                              style={{
                                                fontSize: 15,
                                                color: 'rgb(89, 89, 89)',
                                              }}
                                            >
                                              <span
                                                id="control"
                                                style={{
                                                  color: 'rgb(0, 0, 0)',
                                                }}
                                              >
                                                <strong>
                                                  <span data-custom-class="heading_1">
                                                    5. WHAT IS OUR STANCE ON
                                                    THIRD-PARTY WEBSITES?
                                                  </span>
                                                </strong>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <br />
                                    </div>
                                    <div>
                                      <span
                                        style={{
                                          fontSize: 15,
                                          color: 'rgb(89, 89, 89)',
                                        }}
                                      >
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: 'rgb(89, 89, 89)',
                                          }}
                                        >
                                          <span data-custom-class="body_text">
                                            <strong>
                                              <em>In Short:&nbsp;</em>
                                            </strong>
                                            <em>
                                              &nbsp;We are not responsible for
                                              the safety of any information that
                                              you share with third-party
                                              providers who advertise, but are
                                              not affiliated with, our Website.
                                            </em>
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <br />
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <span
                                        style={{
                                          fontSize: 15,
                                          color: 'rgb(89, 89, 89)',
                                        }}
                                      >
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: 'rgb(89, 89, 89)',
                                          }}
                                        >
                                          <span data-custom-class="body_text">
                                            The{' '}
                                            <span
                                              style={{
                                                color: 'rgb(89, 89, 89)',
                                                fontSize: 15,
                                              }}
                                            >
                                              <span data-custom-class="body_text">
                                                <span style={{ fontSize: 15 }}>
                                                  <span
                                                    style={{
                                                      color: 'rgb(89, 89, 89)',
                                                    }}
                                                  >
                                                    <span data-custom-class="body_text">
                                                      <span
                                                        style={{ fontSize: 15 }}
                                                      >
                                                        <span
                                                          style={{
                                                            color:
                                                              'rgb(89, 89, 89)',
                                                          }}
                                                        >
                                                          <span data-custom-class="body_text">
                                                            <bdt className="block-component" />
                                                            Website
                                                            <bdt className="statement-end-if-in-editor" />
                                                            <bdt className="block-component" />
                                                            <bdt className="block-component" />
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>{' '}
                                            may contain advertisements from
                                            third parties that are not
                                            affiliated with us and which may
                                            link to other websites, online
                                            services or mobile applications. We
                                            cannot guarantee the safety and
                                            privacy of data you provide to any
                                            third parties. Any data collected by
                                            third parties is not covered by this
                                            privacy notice. We are not
                                            responsible for the content or
                                            privacy and security practices and
                                            policies of any third parties,
                                            including other websites, services
                                            or applications that may be linked
                                            to or from the{' '}
                                            <span
                                              style={{
                                                color: 'rgb(89, 89, 89)',
                                                fontSize: 15,
                                              }}
                                            >
                                              <span data-custom-class="body_text">
                                                <span style={{ fontSize: 15 }}>
                                                  <span
                                                    style={{
                                                      color: 'rgb(89, 89, 89)',
                                                    }}
                                                  >
                                                    <span data-custom-class="body_text">
                                                      <span
                                                        style={{ fontSize: 15 }}
                                                      >
                                                        <span
                                                          style={{
                                                            color:
                                                              'rgb(89, 89, 89)',
                                                          }}
                                                        >
                                                          <span data-custom-class="body_text">
                                                            <bdt className="block-component" />
                                                            Website
                                                            <bdt className="statement-end-if-in-editor" />
                                                            <bdt className="block-component" />
                                                            <bdt className="block-component" />
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                            . You should review the policies of
                                            such third parties and contact them
                                            directly to respond to your
                                            questions.
                                            <span
                                              style={{
                                                color: 'rgb(89, 89, 89)',
                                                fontSize: 15,
                                              }}
                                            >
                                              <span
                                                style={{
                                                  color: 'rgb(89, 89, 89)',
                                                  fontSize: 15,
                                                }}
                                              >
                                                <span
                                                  style={{
                                                    color: 'rgb(89, 89, 89)',
                                                    fontSize: 15,
                                                  }}
                                                >
                                                  <span
                                                    style={{
                                                      color: 'rgb(89, 89, 89)',
                                                      fontSize: 15,
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        color:
                                                          'rgb(89, 89, 89)',
                                                        fontSize: 15,
                                                      }}
                                                    >
                                                      <span
                                                        style={{
                                                          color:
                                                            'rgb(89, 89, 89)',
                                                        }}
                                                      >
                                                        <span
                                                          style={{
                                                            color:
                                                              'rgb(89, 89, 89)',
                                                          }}
                                                        >
                                                          <span
                                                            style={{
                                                              color:
                                                                'rgb(89, 89, 89)',
                                                            }}
                                                          >
                                                            <bdt className="statement-end-if-in-editor">
                                                              <span data-custom-class="body_text" />
                                                            </bdt>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <br />
                                    </div>
                                    <div
                                      id="inforetain"
                                      style={{ lineHeight: '1.5' }}
                                    >
                                      <span
                                        style={{ color: 'rgb(127, 127, 127)' }}
                                      >
                                        <span
                                          style={{
                                            color: 'rgb(89, 89, 89)',
                                            fontSize: 15,
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: 15,
                                              color: 'rgb(89, 89, 89)',
                                            }}
                                          >
                                            <span
                                              style={{
                                                fontSize: 15,
                                                color: 'rgb(89, 89, 89)',
                                              }}
                                            >
                                              <span
                                                id="control"
                                                style={{
                                                  color: 'rgb(0, 0, 0)',
                                                }}
                                              >
                                                <strong>
                                                  <span data-custom-class="heading_1">
                                                    6. HOW LONG DO WE KEEP YOUR
                                                    INFORMATION?
                                                  </span>
                                                </strong>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <br />
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <span
                                        style={{
                                          fontSize: 15,
                                          color: 'rgb(89, 89, 89)',
                                        }}
                                      >
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: 'rgb(89, 89, 89)',
                                          }}
                                        >
                                          <span data-custom-class="body_text">
                                            <strong>
                                              <em>In Short:&nbsp;</em>
                                            </strong>
                                            <em>
                                              &nbsp;We keep your information for
                                              as long as necessary to fulfill
                                              the purposes outlined in this
                                              privacy notice unless otherwise
                                              required by law.
                                            </em>
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <br />
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <span
                                        style={{
                                          fontSize: 15,
                                          color: 'rgb(89, 89, 89)',
                                        }}
                                      >
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: 'rgb(89, 89, 89)',
                                          }}
                                        >
                                          <span data-custom-class="body_text">
                                            We will only keep your personal
                                            information for as long as it is
                                            necessary for the purposes set out
                                            in this privacy notice, unless a
                                            longer retention period is required
                                            or permitted by law (such as tax,
                                            accounting or other legal
                                            requirements). No purpose in this
                                            notice will require us keeping your
                                            personal information for longer than{' '}
                                            <span style={{ fontSize: 15 }}>
                                              <span
                                                style={{
                                                  color: 'rgb(89, 89, 89)',
                                                }}
                                              >
                                                <span data-custom-class="body_text">
                                                  <bdt className="block-component" />
                                                  <bdt className="question">
                                                    90 days
                                                  </bdt>
                                                  <bdt className="statement-end-if-in-editor" />
                                                </span>
                                              </span>
                                            </span>
                                            .
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <br />
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <span
                                        style={{
                                          fontSize: 15,
                                          color: 'rgb(89, 89, 89)',
                                        }}
                                      >
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: 'rgb(89, 89, 89)',
                                          }}
                                        >
                                          <span data-custom-class="body_text">
                                            When we have no ongoing legitimate
                                            business need to process your
                                            personal information, we will either
                                            delete or anonymize such
                                            information, or, if this is not
                                            possible (for example, because your
                                            personal information has been stored
                                            in backup archives), then we will
                                            securely store your personal
                                            information and isolate it from any
                                            further processing until deletion is
                                            possible.
                                            <span
                                              style={{
                                                color: 'rgb(89, 89, 89)',
                                              }}
                                            >
                                              <bdt className="block-component" />
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <br />
                                    </div>
                                    <div
                                      id="infosafe"
                                      style={{ lineHeight: '1.5' }}
                                    >
                                      <span
                                        style={{ color: 'rgb(127, 127, 127)' }}
                                      >
                                        <span
                                          style={{
                                            color: 'rgb(89, 89, 89)',
                                            fontSize: 15,
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: 15,
                                              color: 'rgb(89, 89, 89)',
                                            }}
                                          >
                                            <span
                                              style={{
                                                fontSize: 15,
                                                color: 'rgb(89, 89, 89)',
                                              }}
                                            >
                                              <span
                                                id="control"
                                                style={{
                                                  color: 'rgb(0, 0, 0)',
                                                }}
                                              >
                                                <strong>
                                                  <span data-custom-class="heading_1">
                                                    7. HOW DO WE KEEP YOUR
                                                    INFORMATION SAFE?
                                                  </span>
                                                </strong>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <br />
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <span
                                        style={{
                                          fontSize: 15,
                                          color: 'rgb(89, 89, 89)',
                                        }}
                                      >
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: 'rgb(89, 89, 89)',
                                          }}
                                        >
                                          <span data-custom-class="body_text">
                                            <strong>
                                              <em>In Short:&nbsp;</em>
                                            </strong>
                                            <em>
                                              &nbsp;We aim to protect your
                                              personal information through a
                                              system of organizational and
                                              technical security measures.
                                            </em>
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <br />
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <span
                                        style={{
                                          fontSize: 15,
                                          color: 'rgb(89, 89, 89)',
                                        }}
                                      >
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: 'rgb(89, 89, 89)',
                                          }}
                                        >
                                          <span data-custom-class="body_text">
                                            We have implemented appropriate
                                            technical and organizational
                                            security measures designed to
                                            protect the security of any personal
                                            information we process. However,
                                            despite our safeguards and efforts
                                            to secure your information, no
                                            electronic transmission over the
                                            Internet or information storage
                                            technology can be guaranteed to be
                                            100% secure, so we cannot promise or
                                            guarantee that hackers,
                                            cybercriminals, or other
                                            unauthorized third parties will not
                                            be able to defeat our security, and
                                            improperly collect, access, steal,
                                            or modify your information. Although
                                            we will do our best to protect your
                                            personal information, transmission
                                            of personal information to and from
                                            our{' '}
                                            <span
                                              style={{
                                                color: 'rgb(89, 89, 89)',
                                                fontSize: 15,
                                              }}
                                            >
                                              <span data-custom-class="body_text">
                                                <span style={{ fontSize: 15 }}>
                                                  <span
                                                    style={{
                                                      color: 'rgb(89, 89, 89)',
                                                    }}
                                                  >
                                                    <span data-custom-class="body_text">
                                                      <span
                                                        style={{ fontSize: 15 }}
                                                      >
                                                        <span
                                                          style={{
                                                            color:
                                                              'rgb(89, 89, 89)',
                                                          }}
                                                        >
                                                          <span data-custom-class="body_text">
                                                            <bdt className="block-component" />
                                                            Website
                                                            <bdt className="statement-end-if-in-editor" />
                                                            <bdt className="block-component" />
                                                            <bdt className="block-component" />
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>{' '}
                                            is at your own risk. You should only
                                            access the{' '}
                                            <span
                                              style={{
                                                color: 'rgb(89, 89, 89)',
                                                fontSize: 15,
                                              }}
                                            >
                                              <span data-custom-class="body_text">
                                                <span style={{ fontSize: 15 }}>
                                                  <span
                                                    style={{
                                                      color: 'rgb(89, 89, 89)',
                                                    }}
                                                  >
                                                    <span data-custom-class="body_text">
                                                      <span
                                                        style={{ fontSize: 15 }}
                                                      >
                                                        <span
                                                          style={{
                                                            color:
                                                              'rgb(89, 89, 89)',
                                                          }}
                                                        >
                                                          <span data-custom-class="body_text">
                                                            <bdt className="block-component" />
                                                            Website
                                                            <bdt className="statement-end-if-in-editor" />
                                                            <bdt className="block-component" />
                                                            <bdt className="block-component" />
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>{' '}
                                            within a secure environment.
                                            <span
                                              style={{
                                                color: 'rgb(89, 89, 89)',
                                              }}
                                            >
                                              <bdt className="statement-end-if-in-editor" />
                                            </span>
                                            <span
                                              style={{
                                                color: 'rgb(89, 89, 89)',
                                                fontSize: 15,
                                              }}
                                            >
                                              <span data-custom-class="body_text">
                                                <bdt className="block-component" />
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <br />
                                    </div>
                                    <div
                                      id="privacyrights"
                                      style={{ lineHeight: '1.5' }}
                                    >
                                      <span
                                        style={{ color: 'rgb(127, 127, 127)' }}
                                      >
                                        <span
                                          style={{
                                            color: 'rgb(89, 89, 89)',
                                            fontSize: 15,
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: 15,
                                              color: 'rgb(89, 89, 89)',
                                            }}
                                          >
                                            <span
                                              style={{
                                                fontSize: 15,
                                                color: 'rgb(89, 89, 89)',
                                              }}
                                            >
                                              <span
                                                id="control"
                                                style={{
                                                  color: 'rgb(0, 0, 0)',
                                                }}
                                              >
                                                <strong>
                                                  <span data-custom-class="heading_1">
                                                    8. WHAT ARE YOUR PRIVACY
                                                    RIGHTS?
                                                  </span>
                                                </strong>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <br />
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <span
                                        style={{
                                          fontSize: 15,
                                          color: 'rgb(89, 89, 89)',
                                        }}
                                      >
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: 'rgb(89, 89, 89)',
                                          }}
                                        >
                                          <span data-custom-class="body_text">
                                            <strong>
                                              <em>In Short:</em>
                                            </strong>
                                            <em>
                                              &nbsp;{' '}
                                              <span
                                                style={{
                                                  color: 'rgb(89, 89, 89)',
                                                }}
                                              >
                                                <span style={{ fontSize: 15 }}>
                                                  <span data-custom-class="body_text">
                                                    <em>
                                                      <bdt className="block-component" />
                                                    </em>
                                                  </span>
                                                </span>
                                              </span>
                                              You may review, change, or
                                              terminate your account at any
                                              time.
                                            </em>
                                            <span
                                              style={{
                                                color: 'rgb(89, 89, 89)',
                                              }}
                                            >
                                              <span style={{ fontSize: 15 }}>
                                                <bdt className="block-component" />
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <span
                                        style={{
                                          fontSize: 15,
                                          color: 'rgb(89, 89, 89)',
                                        }}
                                      >
                                        &nbsp;
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <span
                                        style={{
                                          fontSize: 15,
                                          color: 'rgb(89, 89, 89)',
                                        }}
                                      >
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: 'rgb(89, 89, 89)',
                                          }}
                                        >
                                          <span data-custom-class="body_text">
                                            If you are a resident in the
                                            European Economic Area and you
                                            believe we are unlawfully processing
                                            your personal information, you also
                                            have the right to complain to your
                                            local data protection supervisory
                                            authority. You can find their
                                            contact details here:{' '}
                                            <span style={{ fontSize: 15 }}>
                                              <span
                                                style={{
                                                  color: 'rgb(89, 89, 89)',
                                                }}
                                              >
                                                <span data-custom-class="body_text">
                                                  <span
                                                    style={{
                                                      color: 'rgb(48, 48, 241)',
                                                    }}
                                                  >
                                                    <span data-custom-class="body_text">
                                                      <a
                                                        data-custom-class="link"
                                                        href="http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
                                                        rel="noopener noreferrer"
                                                        target="_blank"
                                                      >
                                                        <span
                                                          style={{
                                                            fontSize: 15,
                                                          }}
                                                        >
                                                          http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
                                                        </span>
                                                      </a>
                                                    </span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                            .
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <br />
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <span
                                        style={{
                                          fontSize: 15,
                                          color: 'rgb(89, 89, 89)',
                                        }}
                                      >
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: 'rgb(89, 89, 89)',
                                          }}
                                        >
                                          <span data-custom-class="body_text">
                                            If you are a resident in
                                            Switzerland, the contact details for
                                            the data protection authorities are
                                            available here:{' '}
                                            <span style={{ fontSize: 15 }}>
                                              <span
                                                style={{
                                                  color: 'rgb(89, 89, 89)',
                                                }}
                                              >
                                                <span data-custom-class="body_text">
                                                  <span
                                                    style={{
                                                      color: 'rgb(48, 48, 241)',
                                                    }}
                                                  >
                                                    <span data-custom-class="body_text">
                                                      <span
                                                        style={{ fontSize: 15 }}
                                                      >
                                                        <a
                                                          data-custom-class="link"
                                                          href="https://www.edoeb.admin.ch/edoeb/en/home.html"
                                                          rel="noopener noreferrer"
                                                          target="_blank"
                                                        >
                                                          https://www.edoeb.admin.ch/edoeb/en/home.html
                                                        </a>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                            .<bdt className="block-component" />
                                            <bdt className="block-component" />
                                          </span>
                                        </span>
                                      </span>
                                      <span data-custom-class="body_text">
                                        <bdt className="block-component" />
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <br />
                                    </div>
                                    <div id="DNT" style={{ lineHeight: '1.5' }}>
                                      <span
                                        style={{ color: 'rgb(127, 127, 127)' }}
                                      >
                                        <span
                                          style={{
                                            color: 'rgb(89, 89, 89)',
                                            fontSize: 15,
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: 15,
                                              color: 'rgb(89, 89, 89)',
                                            }}
                                          >
                                            <span
                                              style={{
                                                fontSize: 15,
                                                color: 'rgb(89, 89, 89)',
                                              }}
                                            >
                                              <span
                                                id="control"
                                                style={{
                                                  color: 'rgb(0, 0, 0)',
                                                }}
                                              >
                                                <strong>
                                                  <span data-custom-class="heading_1">
                                                    9. CONTROLS FOR DO-NOT-TRACK
                                                    FEATURES
                                                  </span>
                                                </strong>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <br />
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <span
                                        style={{
                                          fontSize: 15,
                                          color: 'rgb(89, 89, 89)',
                                        }}
                                      >
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: 'rgb(89, 89, 89)',
                                          }}
                                        >
                                          <span data-custom-class="body_text">
                                            Most web browsers and some mobile
                                            operating systems and mobile
                                            applications include a Do-Not-Track
                                            ("DNT") feature or setting you can
                                            activate to signal your privacy
                                            preference not to have data about
                                            your online browsing activities
                                            monitored and collected. At this
                                            stage no uniform technology standard
                                            for recognizing and implementing DNT
                                            signals has been finalized. As such,
                                            we do not currently respond to DNT
                                            browser signals or any other
                                            mechanism that automatically
                                            communicates your choice not to be
                                            tracked online. If a standard for
                                            online tracking is adopted that we
                                            must follow in the future, we will
                                            inform you about that practice in a
                                            revised version of this privacy
                                            notice.
                                          </span>
                                        </span>
                                        &nbsp;
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <br />
                                    </div>
                                    <div
                                      id="caresidents"
                                      style={{ lineHeight: '1.5' }}
                                    >
                                      <span
                                        style={{ color: 'rgb(127, 127, 127)' }}
                                      >
                                        <span
                                          style={{
                                            color: 'rgb(89, 89, 89)',
                                            fontSize: 15,
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: 15,
                                              color: 'rgb(89, 89, 89)',
                                            }}
                                          >
                                            <span
                                              style={{
                                                fontSize: 15,
                                                color: 'rgb(89, 89, 89)',
                                              }}
                                            >
                                              <span
                                                id="control"
                                                style={{
                                                  color: 'rgb(0, 0, 0)',
                                                }}
                                              >
                                                <strong>
                                                  <span data-custom-class="heading_1">
                                                    10. DO CALIFORNIA RESIDENTS
                                                    HAVE SPECIFIC PRIVACY
                                                    RIGHTS?
                                                  </span>
                                                </strong>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <br />
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <span
                                        style={{
                                          fontSize: 15,
                                          color: 'rgb(89, 89, 89)',
                                        }}
                                      >
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: 'rgb(89, 89, 89)',
                                          }}
                                        >
                                          <span data-custom-class="body_text">
                                            <strong>
                                              <em>In Short:&nbsp;</em>
                                            </strong>
                                            <em>
                                              &nbsp;Yes, if you are a resident
                                              of California, you are granted
                                              specific rights regarding access
                                              to your personal information.
                                            </em>
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <br />
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <span
                                        style={{
                                          fontSize: 15,
                                          color: 'rgb(89, 89, 89)',
                                        }}
                                      >
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: 'rgb(89, 89, 89)',
                                          }}
                                        >
                                          <span data-custom-class="body_text">
                                            California Civil Code Section
                                            1798.83, also known as the "Shine
                                            The Light" law, permits our users
                                            who are California residents to
                                            request and obtain from us, once a
                                            year and free of charge, information
                                            about categories of personal
                                            information (if any) we disclosed to
                                            third parties for direct marketing
                                            purposes and the names and addresses
                                            of all third parties with which we
                                            shared personal information in the
                                            immediately preceding calendar year.
                                            If you are a California resident and
                                            would like to make such a request,
                                            please submit your request in
                                            writing to us using the contact
                                            information provided below.
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <br />
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <span
                                        style={{
                                          fontSize: 15,
                                          color: 'rgb(89, 89, 89)',
                                        }}
                                      >
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: 'rgb(89, 89, 89)',
                                          }}
                                        >
                                          <span data-custom-class="body_text">
                                            If you are under 18 years of age,
                                            reside in California, and have a
                                            registered account with{' '}
                                            <span
                                              style={{
                                                color: 'rgb(89, 89, 89)',
                                                fontSize: 15,
                                              }}
                                            >
                                              <span data-custom-class="body_text">
                                                <span
                                                  style={{
                                                    color: 'rgb(89, 89, 89)',
                                                    fontSize: 15,
                                                  }}
                                                >
                                                  <span data-custom-class="body_text">
                                                    <span
                                                      style={{ fontSize: 15 }}
                                                    >
                                                      <span
                                                        style={{
                                                          color:
                                                            'rgb(89, 89, 89)',
                                                        }}
                                                      >
                                                        <span data-custom-class="body_text">
                                                          <bdt className="block-component" />
                                                          the Website
                                                          <bdt className="statement-end-if-in-editor" />
                                                          <bdt className="block-component" />
                                                          <bdt className="block-component" />
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                            , you have the right to request
                                            removal of unwanted data that you
                                            publicly post on the{' '}
                                            <span
                                              style={{
                                                color: 'rgb(89, 89, 89)',
                                                fontSize: 15,
                                              }}
                                            >
                                              <span data-custom-class="body_text">
                                                <span
                                                  style={{
                                                    color: 'rgb(89, 89, 89)',
                                                    fontSize: 15,
                                                  }}
                                                >
                                                  <span data-custom-class="body_text">
                                                    <span
                                                      style={{ fontSize: 15 }}
                                                    >
                                                      <span
                                                        style={{
                                                          color:
                                                            'rgb(89, 89, 89)',
                                                        }}
                                                      >
                                                        <span data-custom-class="body_text">
                                                          <bdt className="block-component" />
                                                          Website
                                                          <bdt className="statement-end-if-in-editor" />
                                                          <bdt className="block-component" />
                                                          <bdt className="block-component" />
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                            . To request removal of such data,
                                            please contact us using the contact
                                            information provided below, and
                                            include the email address associated
                                            with your account and a statement
                                            that you reside in California. We
                                            will make sure the data is not
                                            publicly displayed on the{' '}
                                            <span
                                              style={{
                                                color: 'rgb(89, 89, 89)',
                                                fontSize: 15,
                                              }}
                                            >
                                              <span data-custom-class="body_text">
                                                <span
                                                  style={{
                                                    color: 'rgb(89, 89, 89)',
                                                    fontSize: 15,
                                                  }}
                                                >
                                                  <span data-custom-class="body_text">
                                                    <span
                                                      style={{ fontSize: 15 }}
                                                    >
                                                      <span
                                                        style={{
                                                          color:
                                                            'rgb(89, 89, 89)',
                                                        }}
                                                      >
                                                        <span data-custom-class="body_text">
                                                          <bdt className="block-component" />
                                                          Website
                                                          <bdt className="statement-end-if-in-editor" />
                                                          <bdt className="block-component" />
                                                          <bdt className="block-component" />
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                            , but please be aware that the data
                                            may not be completely or
                                            comprehensively removed from all our
                                            systems (e.g. backups, etc.).
                                            <span
                                              style={{
                                                color: 'rgb(89, 89, 89)',
                                                fontSize: 15,
                                              }}
                                            >
                                              <span data-custom-class="body_text">
                                                <bdt className="block-component" />
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <br />
                                    </div>
                                    <div
                                      id="policyupdates"
                                      style={{ lineHeight: '1.5' }}
                                    >
                                      <span
                                        style={{ color: 'rgb(127, 127, 127)' }}
                                      >
                                        <span
                                          style={{
                                            color: 'rgb(89, 89, 89)',
                                            fontSize: 15,
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: 15,
                                              color: 'rgb(89, 89, 89)',
                                            }}
                                          >
                                            <span
                                              style={{
                                                fontSize: 15,
                                                color: 'rgb(89, 89, 89)',
                                              }}
                                            >
                                              <span
                                                id="control"
                                                style={{
                                                  color: 'rgb(0, 0, 0)',
                                                }}
                                              >
                                                <strong>
                                                  <span data-custom-class="heading_1">
                                                    11. DO WE MAKE UPDATES TO
                                                    THIS NOTICE?
                                                  </span>
                                                </strong>
                                                &nbsp;
                                              </span>
                                              &nbsp;
                                            </span>
                                            &nbsp;
                                          </span>
                                          &nbsp;
                                        </span>
                                        &nbsp;
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <em>
                                        <br />
                                      </em>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <span
                                        style={{
                                          fontSize: 15,
                                          color: 'rgb(89, 89, 89)',
                                        }}
                                      >
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: 'rgb(89, 89, 89)',
                                          }}
                                        >
                                          <span data-custom-class="body_text">
                                            <em>
                                              <strong>In Short:&nbsp;</strong>{' '}
                                              Yes, we will update this notice as
                                              necessary to stay compliant with
                                              relevant laws.
                                            </em>
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <br />
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <span
                                        style={{
                                          fontSize: 15,
                                          color: 'rgb(89, 89, 89)',
                                        }}
                                      >
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: 'rgb(89, 89, 89)',
                                          }}
                                        >
                                          <span data-custom-class="body_text">
                                            We may update this privacy notice
                                            from time to time. The updated
                                            version will be indicated by an
                                            updated "Revised" date and the
                                            updated version will be effective as
                                            soon as it is accessible. If we make
                                            material changes to this privacy
                                            notice, we may notify you either by
                                            prominently posting a notice of such
                                            changes or by directly sending you a
                                            notification. We encourage you to
                                            review this privacy notice
                                            frequently to be informed of how we
                                            are protecting your information.
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <br />
                                    </div>
                                    <div
                                      id="contact"
                                      style={{ lineHeight: '1.5' }}
                                    >
                                      <span
                                        style={{ color: 'rgb(127, 127, 127)' }}
                                      >
                                        <span
                                          style={{
                                            color: 'rgb(89, 89, 89)',
                                            fontSize: 15,
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: 15,
                                              color: 'rgb(89, 89, 89)',
                                            }}
                                          >
                                            <span
                                              style={{
                                                fontSize: 15,
                                                color: 'rgb(89, 89, 89)',
                                              }}
                                            >
                                              <span
                                                id="control"
                                                style={{
                                                  color: 'rgb(0, 0, 0)',
                                                }}
                                              >
                                                <strong>
                                                  <span data-custom-class="heading_1">
                                                    12. HOW CAN YOU CONTACT US
                                                    ABOUT THIS NOTICE?
                                                  </span>
                                                </strong>
                                                &nbsp;
                                              </span>
                                              &nbsp;
                                            </span>
                                            &nbsp;
                                          </span>
                                          &nbsp;
                                        </span>
                                        &nbsp;
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <br />
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <span
                                        style={{
                                          fontSize: 15,
                                          color: 'rgb(89, 89, 89)',
                                        }}
                                      >
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: 'rgb(89, 89, 89)',
                                          }}
                                        >
                                          <span data-custom-class="body_text">
                                            If you have questions or comments
                                            about this notice, you may{' '}
                                            <span
                                              style={{
                                                color: 'rgb(89, 89, 89)',
                                                fontSize: 15,
                                              }}
                                            >
                                              <span data-custom-class="body_text">
                                                <bdt className="block-component" />
                                                email us at{' '}
                                                <bdt className="question">
                                                  contact@mediaedits.io
                                                </bdt>
                                                <bdt className="statement-end-if-in-editor" />
                                              </span>
                                            </span>{' '}
                                            or by post to:
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <br />
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <span
                                        style={{
                                          fontSize: 15,
                                          color: 'rgb(89, 89, 89)',
                                        }}
                                      >
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: 'rgb(89, 89, 89)',
                                          }}
                                        >
                                          <span data-custom-class="body_text">
                                            <span style={{ fontSize: 15 }}>
                                              <span
                                                style={{
                                                  color: 'rgb(89, 89, 89)',
                                                }}
                                              >
                                                <span
                                                  style={{
                                                    color: 'rgb(89, 89, 89)',
                                                  }}
                                                >
                                                  <span data-custom-class="body_text">
                                                    <bdt className="question">
                                                      MediaEdits.io
                                                    </bdt>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                          <span data-custom-class="body_text">
                                            <span
                                              style={{
                                                color: 'rgb(89, 89, 89)',
                                              }}
                                            >
                                              <span data-custom-class="body_text">
                                                <bdt className="block-component" />
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <span style={{ fontSize: 15 }}>
                                        <span data-custom-class="body_text">
                                          <bdt className="question">
                                            107 Troutman St
                                          </bdt>
                                          <span
                                            style={{ color: 'rgb(89, 89, 89)' }}
                                          >
                                            <span style={{ fontSize: 15 }}>
                                              <bdt className="block-component" />
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <span style={{ fontSize: 15 }}>
                                        <span data-custom-class="body_text">
                                          <bdt className="question">
                                            Brooklyn
                                          </bdt>
                                          <span
                                            style={{ color: 'rgb(89, 89, 89)' }}
                                          >
                                            <span style={{ fontSize: 15 }}>
                                              <bdt className="block-component" />
                                              <bdt className="block-component" />
                                              ,{' '}
                                              <bdt className="question">NY</bdt>
                                              <bdt className="statement-end-if-in-editor" />
                                              <bdt className="block-component" />
                                              <bdt className="block-component" />{' '}
                                              <bdt className="question">
                                                11206
                                              </bdt>
                                              <bdt className="statement-end-if-in-editor" />
                                            </span>
                                            <span style={{ fontSize: 15 }}>
                                              <bdt className="block-component" />
                                              <bdt className="block-component" />
                                              <bdt className="block-component" />
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <span
                                        data-custom-class="body_text"
                                        style={{ fontSize: 15 }}
                                      >
                                        <bdt className="question">
                                          United States
                                          <span data-custom-class="body_text">
                                            <span
                                              style={{
                                                color: 'rgb(89, 89, 89)',
                                              }}
                                            >
                                              <span style={{ fontSize: 15 }}>
                                                <span data-custom-class="body_text">
                                                  <span
                                                    style={{
                                                      color: 'rgb(89, 89, 89)',
                                                    }}
                                                  >
                                                    <span
                                                      style={{ fontSize: 15 }}
                                                    >
                                                      <span data-custom-class="body_text">
                                                        <span
                                                          style={{
                                                            color:
                                                              'rgb(89, 89, 89)',
                                                          }}
                                                        >
                                                          <span
                                                            style={{
                                                              fontSize: 15,
                                                            }}
                                                          >
                                                            <bdt className="statement-end-if-in-editor" />
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                                <bdt className="else-block" />
                                              </span>
                                            </span>
                                          </span>
                                        </bdt>
                                        <bdt className="statement-end-if-in-editor" />
                                      </span>
                                      <span data-custom-class="body_text">
                                        <span
                                          style={{ color: 'rgb(89, 89, 89)' }}
                                        >
                                          <span style={{ fontSize: 15 }}>
                                            <bdt className="statement-end-if-in-editor" />
                                          </span>
                                        </span>
                                      </span>
                                      <span
                                        style={{ color: 'rgb(89, 89, 89)' }}
                                      >
                                        <span style={{ fontSize: 15 }}>
                                          <span data-custom-class="body_text">
                                            <bdt className="block-component">
                                              <bdt className="block-component" />
                                            </bdt>
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <br />
                                    </div>
                                    <div
                                      id="request"
                                      style={{ lineHeight: '1.5' }}
                                    >
                                      <span
                                        style={{ color: 'rgb(127, 127, 127)' }}
                                      >
                                        <span
                                          style={{
                                            color: 'rgb(89, 89, 89)',
                                            fontSize: 15,
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: 15,
                                              color: 'rgb(89, 89, 89)',
                                            }}
                                          >
                                            <span
                                              style={{
                                                fontSize: 15,
                                                color: 'rgb(89, 89, 89)',
                                              }}
                                            >
                                              <span
                                                id="control"
                                                style={{
                                                  color: 'rgb(0, 0, 0)',
                                                }}
                                              >
                                                <strong>
                                                  <span data-custom-class="heading_1">
                                                    13. HOW CAN YOU REVIEW,
                                                    UPDATE, OR DELETE THE DATA
                                                    WE COLLECT FROM YOU?
                                                  </span>
                                                </strong>
                                                &nbsp;
                                              </span>
                                              &nbsp;
                                            </span>
                                            &nbsp;
                                          </span>
                                          &nbsp;
                                        </span>
                                        &nbsp;
                                      </span>
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <br />
                                    </div>
                                    <div style={{ lineHeight: '1.5' }}>
                                      <span
                                        style={{
                                          fontSize: 15,
                                          color: 'rgb(89, 89, 89)',
                                        }}
                                      >
                                        <span
                                          style={{
                                            fontSize: 15,
                                            color: 'rgb(89, 89, 89)',
                                          }}
                                        >
                                          <span data-custom-class="body_text">
                                            Based on the applicable laws of your
                                            country, you may have the right to
                                            request access to the personal
                                            information we collect from you,
                                            change that information, or delete
                                            it in some circumstances. To request
                                            to review, update, or delete your
                                            personal information, please{' '}
                                            <bdt className="block-component" />
                                            submit a request form by
                                            clicking&nbsp;
                                          </span>
                                          <span
                                            style={{
                                              color: 'rgb(48, 48, 241)',
                                            }}
                                          >
                                            <span data-custom-class="body_text">
                                              <span style={{ fontSize: 15 }}>
                                                <a
                                                  data-custom-class="link"
                                                  href="https://app.termly.io/notify/8dd24690-fb97-4f5b-9527-97c463e3dd1c"
                                                  rel="noopener noreferrer"
                                                  target="_blank"
                                                >
                                                  here
                                                </a>
                                              </span>
                                            </span>
                                          </span>
                                          <span style={{ fontSize: 15 }}>
                                            <span data-custom-class="body_text">
                                              <bdt className="statement-end-if-in-editor" />
                                            </span>
                                          </span>
                                          <span data-custom-class="body_text">
                                            . We will respond to your request
                                            within 30 days.
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <style
                                      dangerouslySetInnerHTML={{
                                        __html:
                                          '\n      ul {\n        list-style-type: square;\n      }\n      ul > li > ul {\n        list-style-type: circle;\n      }\n      ul > li > ul > li > ul {\n        list-style-type: square;\n      }\n      ol li {\n        font-family: Arial ;\n      }\n    ',
                                      }}
                                    />
                                  </div>
                                  <div
                                    style={{
                                      color: '#595959',
                                      fontSize: 14,
                                      fontFamily: 'Arial',
                                      paddingTop: 16,
                                    }}
                                  >
                                    This privacy policy was created using{' '}
                                    <a
                                      style={{
                                        color: 'rgb(48, 48, 241) !important',
                                      }}
                                      href="https://termly.io/products/privacy-policy-generator/?ftseo"
                                    >
                                      Termly’s Privacy Policy Generator
                                    </a>
                                    .
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
