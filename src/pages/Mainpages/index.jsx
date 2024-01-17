import React, { useState } from "react";


import { Button, Img, Line, List, Text } from "components";
import Form from "pages/Modal";
import SideNav from "../sideNav";

const Mainpage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="bg-gray-50 flex sm:flex-col md:flex-col flex-row font-inter gap-4 items-start mx-auto pr-0.5 py-0.5 w-full">
      <div className="nav_new_bar">
            <SideNav/>
          </div>
          <div className="navbar">
        <div className="bg-white-A700 flex flex-col h-[992px] md:h-auto items-start justify-start mb-[26px] pb-5 md:pl-5 pl-[30px] pr-5 pt-4 w-auto">
   
        <div className='lg:flex lg:space-x-4'>
          <div className="flex flex-col items-center justify-start w-auto">
            <div className="flex flex-col gap-0.5 h-[502px] md:h-auto items-start justify-start pb-2.5 w-auto">
              <div className="bg-white-A700 flex flex-col gap-1.5 h-[70px] md:h-auto items-center justify-center px-5 py-2.5 rounded-lg w-[90px]">
                <Img
                  className="h-5 w-5"
                  src="images/img_dashboard.svg"
                  alt="dashboard"
                />
                <Text
                  className="text-indigo-800 text-xs w-auto"
                  size="txtInterMedium12"
                >
                  Dashboard
                </Text>
              </div>
              <div className="bg-blue-50 border border-light_blue-700 border-solid flex flex-col gap-1.5 h-[70px] md:h-auto items-center justify-center px-5 py-2.5 rounded-lg w-[90px]">
                <Img
                  className="h-5 w-5"
                  src="images/img_notealt.svg"
                  alt="notealt"
                />
                <Text
                  className="text-light_blue-700 text-xs w-auto"
                  size="txtInterMedium12Lightblue700"
                >
                  Assessment
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col gap-1.5 h-[70px] md:h-auto items-center justify-center px-5 py-2.5 rounded-lg w-[90px]">
                <Img
                  className="h-5 w-5"
                  src="images/img_profile.svg"
                  alt="profile"
                />
                <Text
                  className="text-indigo-800 text-xs w-auto"
                  size="txtInterMedium12"
                >
                  My Library
                </Text>
              </div>
              <div className="h-[214px] relative w-full">
                <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="bg-white-A700 h-[70px] rounded-lg w-full"></div>
                    <div className="bg-white-A700 h-[70px] mt-0.5 rounded-lg w-full"></div>
                    <div className="bg-white-A700 h-[70px] mt-0.5 rounded-lg w-full"></div>
                  </div>
                </div>
                <div className="absolute flex flex-col gap-4 inset-x-[0] items-center justify-start mx-auto top-[12%] w-[90px]">
                  <Line className="bg-teal-100 h-px w-full" />
                  <div className="flex flex-col gap-1.5 items-center justify-start w-auto">
                    <Text
                      className="bg-deep_orange-50 border border-deep_orange-A700 border-solid h-[18px] justify-center px-2 py-0.5 rounded-[9px] text-[10px] text-deep_orange-A700 w-auto"
                      size="txtInterMedium10"
                    >
                      Admin
                    </Text>
                    <div className="bg-white-A700 flex flex-col gap-1.5 items-center justify-center px-5 py-2.5 rounded-lg w-[90px]">
                      <Img
                        className="h-5 w-5"
                        src="images/img_thumbsup.svg"
                        alt="thumbsup"
                      />
                      <Text
                        className="leading-[140.00%] text-center text-indigo-800 text-xs"
                        size="txtInterMedium12"
                      >
                        <>
                          Round
                          <br />
                          Status
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 h-[70px] rounded-lg w-full"></div>
            </div>
          </div>
          </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start max-w-[1356px] mr-[18px] md:px-5 w-full">
          <div className="accordians_hide">
          <div className="bg-white-A700 flex flex-col h-[70px] md:h-auto items-start justify-center outline outline-gray-300 px-5 rounded-tl-[12px] rounded-tr-[12px] w-full">
            <div className="flex flex-row md:gap-10 h-full items-center justify-between w-full">
              <div className="flex flex-row gap-5 h-[70px] md:h-auto items-center justify-start">
                <Text
                  className="text-indigo-800 text-xl w-auto"
                  size="txtInterSemiBold20"
                >
                  Assessment
                </Text>
                <Line className="bg-gray-300_01 h-[46px] w-px" />
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="bg-white-A700 border-b-[3px] border-light_blue-700 border-solid h-[70px] justify-center pb-6 pt-7 text-light_blue-700 text-sm w-auto"
                    size="txtInterSemiBold14"
                  >
                    My Assessments
                  </Text>
                </div>
              </div>
              <Button
                className="flex h-10 items-center justify-center w-10"
                shape="circle"
              >
                <Img src="images/img_minimize.svg" alt="minimize" />
              </Button>
            </div>
          </div>
          </div>
          <div className="accordians_show">
            <div className="accodians_content">
            <div className="left"><p id="left">My Assessments</p></div>
            <div className="right">
              <p id="right">Unstop Assessments</p>
            </div>
            </div>
           
          </div>
          <div className="bg-white-A700 flex flex-col items-start justify-start p-5 rounded-bl-[12px] rounded-br-[12px] w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <div className="assigment_overview_hidden">
                <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-indigo-800 text-lg w-auto"
                    size="txtInterMedium18"
                  >
                    Assessments Overview
                  </Text>
                  <div className="flex md:flex-col flex-row gap-px items-start justify-start max-w-[1224px] outline outline-[1px] outline-gray-300_01 rounded-[12px] w-full">
                    <div className="bg-white-A700 flex flex-col gap-4 h-[114px] md:h-auto items-start justify-start px-5 py-4 w-[162px]">
                      <Text
                        className="text-indigo-800 text-sm w-auto"
                        size="txtInterSemiBold14Indigo800"
                      >
                        Total Assessment
                      </Text>
                      <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                        <Button
                          className="flex h-10 items-center justify-center w-10"
                          shape="round"
                          color="deep_purple_50"
                        >
                          <Img
                            className="h-5"
                            src="images/img_viewagenda.svg"
                            alt="viewagenda"
                          />
                        </Button>
                        <Text
                          className="text-indigo-800 text-xl w-auto"
                          size="txtInterBold20"
                        >
                          34
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-gray-300_01 h-[114px] md:h-px md:w-full w-px" />
                    <div className="bg-white-A700 flex flex-1 flex-col gap-4 h-full items-start justify-start px-5 py-4 w-full">
                      <Text
                        className="text-indigo-800 text-sm w-auto"
                        size="txtInterSemiBold14Indigo800"
                      >
                        Candidates
                      </Text>
                      <div className="flex flex-row gap-5 items-center justify-start w-auto">
                        <Button
                          className="flex h-10 items-center justify-center w-10"
                          shape="round"
                          color="deep_purple_50"
                        >
                          <Img src="images/img_settings.svg" alt="settings" />
                        </Button>
                        <div className="flex flex-col gap-px items-start justify-start w-auto">
                          <div className="flex flex-row gap-1 items-center justify-start w-auto">
                            <Text
                              className="text-indigo-800 text-xl w-auto"
                              size="txtInterBold20"
                            >
                              11,145
                            </Text>
                            <Text
                              className="text-green-A700 text-xs w-auto"
                              size="txtInterMedium12GreenA700"
                            >
                              +89
                            </Text>
                          </div>
                          <Text
                            className="text-indigo-800 text-xs w-auto"
                            size="txtInterMedium12"
                          >
                            Total Candidate
                          </Text>
                        </div>
                        <Line className="bg-gray-300_01 h-10 w-px" />
                        <div className="flex flex-col gap-px items-start justify-start w-auto">
                          <div className="flex flex-row gap-1 items-center justify-start w-auto">
                            <Text
                              className="text-indigo-800 text-xl w-auto"
                              size="txtInterBold20"
                            >
                              1,14
                            </Text>
                            <Text
                              className="text-green-A700 text-xs w-auto"
                              size="txtInterMedium12GreenA700"
                            >
                              +89
                            </Text>
                          </div>
                          <Text
                            className="text-indigo-800 text-xs w-auto"
                            size="txtInterMedium12"
                          >
                            Who Attamped
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="bg-gray-300_01 h-[114px] md:h-px md:w-full w-px" />
                    <div className="bg-white-A700 flex sm:flex-1 flex-col gap-4 h-[114px] md:h-auto items-start justify-start px-5 py-4 w-[499px] sm:w-full">
                      <Text
                        className="text-indigo-800 text-sm w-auto"
                        size="txtInterSemiBold14Indigo800"
                      >
                        Candidates Source
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-auto sm:w-full">
                        <Button
                          className="flex h-10 items-center justify-center w-10"
                          shape="round"
                          color="red_50"
                        >
                          <Img
                            className="h-4"
                            src="images/img_close.svg"
                            alt="close"
                          />
                        </Button>
                        <div className="flex flex-col gap-px items-start justify-start w-auto">
                          <div className="flex flex-row gap-1 items-center justify-start w-auto">
                            <Text
                              className="text-indigo-800 text-xl w-auto"
                              size="txtInterBold20"
                            >
                              11,000
                            </Text>
                            <Text
                              className="text-green-A700 text-xs w-auto"
                              size="txtInterMedium12GreenA700"
                            >
                              +89
                            </Text>
                          </div>
                          <Text
                            className="text-indigo-800 text-xs w-auto"
                            size="txtInterMedium12"
                          >
                            E-mail
                          </Text>
                        </div>
                        <Line className="bg-gray-300_01 h-10 sm:h-px sm:w-full w-px" />
                        <div className="flex flex-col gap-px items-start justify-start w-auto">
                          <div className="flex flex-row gap-1 items-center justify-start w-auto">
                            <Text
                              className="text-indigo-800 text-xl w-auto"
                              size="txtInterBold20"
                            >
                              145
                            </Text>
                            <Text
                              className="text-green-A700 text-xs w-auto"
                              size="txtInterMedium12GreenA700"
                            >
                              +89
                            </Text>
                          </div>
                          <Text
                            className="text-indigo-800 text-xs w-auto"
                            size="txtInterMedium12"
                          >
                            Social Share
                          </Text>
                        </div>
                        <Line className="bg-gray-300_01 h-10 sm:h-px sm:w-full w-px" />
                        <div className="flex flex-col gap-px items-start justify-start w-auto">
                          <div className="flex flex-row gap-1 items-center justify-start w-auto">
                            <Text
                              className="text-indigo-800 text-xl w-auto"
                              size="txtInterBold20"
                            >
                              145
                            </Text>
                            <Text
                              className="text-green-A700 text-xs w-auto"
                              size="txtInterMedium12GreenA700"
                            >
                              +89
                            </Text>
                          </div>
                          <Text
                            className="text-indigo-800 text-xs w-auto"
                            size="txtInterMedium12"
                          >
                            Unique Link
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="bg-gray-300_01 h-[114px] md:h-px md:w-full w-px" />
                    <div className="bg-white-A700 flex flex-col gap-4 h-[114px] md:h-auto items-start justify-start pl-5 md:pr-10 sm:pr-5 pr-[50px] py-4 w-[188px]">
                      <Text
                        className="text-indigo-800 text-sm w-auto"
                        size="txtInterSemiBold14Indigo800"
                      >
                        Total Purpose
                      </Text>
                      <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                        <Button
                          className="flex h-10 items-center justify-center w-10"
                          shape="round"
                          color="blue_50"
                        >
                          <Img
                            src="images/img_television.svg"
                            alt="television"
                          />
                        </Button>
                        <Text
                          className="text-indigo-800 text-xl w-auto"
                          size="txtInterBold20"
                        >
                          11
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                <div className="assigment_overview_show">
                <img src="./images/Frame 1000009691.png" alt="barchart" style={{ width:'100%', marginBottom:'27px'}} className={`image_barchart ${isMenuOpen ? 'block' : 'hidden lg:hidden'}`}/>
                  <div className="assigment_overview_content">
                    <div className="assigment_heading">

                      <h1>My Assessment</h1>
                    </div>
                    <div className="assigment-right_site" style={{display:'flex'}}>
                      <img src="./images/search.png" alt="barchart"/>
                      <img src="./images/filter_list_alt.png" alt="filter" style={{margin:'0px 21px'}}/>
                      <img src="./images/bar_chart.png" onClick={() => setMenuOpen(!isMenuOpen)} alt="search"/>
                    

                    </div>

                  </div>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                  <div className="flex flex-row gap-2.5 items-end justify-between max-w-[1224px] w-full">
                    <Text
                      className="text-indigo-800 text-lg w-auto"
                      size="txtInterMedium18"
                    >
                      My Assessment
                    </Text>
                    <div className="bg-white-A700 h-10 rounded-[50%] w-10"></div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto md:w-full">
                    <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start max-w-[1224px] w-full">
                      <div className="bg-gray-50 border border-dashed border-gray-300_01 flex flex-1 flex-col gap-3 h-full items-center justify-center p-[30px] sm:px-5 rounded-[12px] w-full">
                        <div className="flex flex-col gap-2.5 items-center justify-start w-auto">
                          {/* <Button
                            className="flex h-[70px] items-center justify-center rounded-[50%] w-[70px]"
                            shape="circle"
                            size="md"
                          >
                            <Img
                              className="h-10"
                              src="images/img_add.svg"
                              alt="add"
                            />
                          </Button> */}
                          <Form/>
                          <Text
                            className="text-center text-indigo-800 text-lg w-auto"
                            size="txtInterMedium18"
                          >
                            New Assessment
                          </Text>
                        </div>
                        <Text
                          className="max-w-[328px] md:max-w-full text-center text-indigo-800 text-xs"
                          size="txtInterMedium12"
                        >
                          From here you can add questions of multiple types like
                          MCQs, subjective (text or paragraph)!
                        </Text>
                      </div>
                      <List
                        className="md:flex-1 sm:flex-col flex-row gap-[30px] grid md:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
                        orientation="horizontal"
                      >
                        <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-col gap-4 items-start justify-start p-4 rounded-[12px] w-full">
                          <div className="flex flex-row gap-2.5 items-start justify-between w-full">
                            <div className="flex flex-col gap-2.5 items-start justify-center w-auto">
                              <Button
                                className="flex h-[50px] items-center justify-center rounded-[12px] w-[50px]"
                                color="deep_purple_50"
                                size="md"
                              >
                                <Img src="images/img_bag.svg" alt="bag" />
                              </Button>
                              <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                                <Text
                                  className="text-indigo-800 text-lg w-auto"
                                  size="txtInterMedium18"
                                >
                                  Math Assessment
                                </Text>
                                <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                                  <Text
                                    className="text-indigo-800 text-sm w-[26px]"
                                    size="txtInterSemiBold14Indigo800"
                                  >
                                    Job
                                  </Text>
                                  <Line className="bg-gray-300_01 h-4 w-px" />
                                  <div className="flex flex-row gap-1 h-[22px] md:h-auto items-center justify-start w-auto">
                                    <Img
                                      className="h-3.5 w-3.5"
                                      src="images/img_calendartoday.svg"
                                      alt="calendartoday"
                                    />
                                    <Text
                                      className="text-blue_gray-300 text-xs w-auto"
                                      size="txtInterMedium12Bluegray300"
                                    >
                                      20 Apr 2023
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Button
                              className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                              shape="circle"
                              size="xs"
                            >
                              <Img
                                className="h-5"
                                src="images/img_3dot.svg"
                                alt="3dot"
                              />
                            </Button>
                          </div>
                          <Line className="bg-gray-300_01 h-px w-full" />
                          <div className="flex flex-row gap-5 items-center justify-between w-full">
                            <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                              <div className="flex flex-col gap-[-1px] items-start justify-start w-auto">
                                <Text
                                  className="text-indigo-800 text-sm w-auto"
                                  size="txtInterSemiBold14Indigo800"
                                >
                                  00
                                </Text>
                                <Text
                                  className="text-indigo-800 text-xs w-auto"
                                  size="txtInterMedium12"
                                >
                                  Duration
                                </Text>
                              </div>
                              <div className="flex flex-col gap-[-1px] items-start justify-start w-auto">
                                <Text
                                  className="text-indigo-800 text-sm w-auto"
                                  size="txtInterSemiBold14Indigo800"
                                >
                                  00
                                </Text>
                                <Text
                                  className="text-indigo-800 text-xs w-auto"
                                  size="txtInterMedium12"
                                >
                                  Questions
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                              <Button
                                className="border border-indigo-800 border-solid cursor-pointer flex items-center justify-center min-w-[77px] rounded-[15px]"
                                leftIcon={
                                  <Img
                                    className="h-5 mr-1"
                                    src="images/img_link.svg"
                                    alt="link"
                                  />
                                }
                                size="xs"
                              >
                                <div className="!text-indigo-800 font-medium text-left text-sm">
                                  Share
                                </div>
                              </Button>
                              <div className="flex flex-col items-center justify-start w-[30px]">
                                <Text
                                  className="bg-deep_purple-A200 border border-solid border-white-A700 flex h-[30px] items-center justify-center rounded-[50%] text-center text-sm text-white-A700 w-[30px]"
                                  size="txtInterBold14"
                                >
                                  LP
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-col gap-4 items-start justify-start p-4 rounded-[12px] w-full">
                          <div className="flex flex-row gap-2.5 items-start justify-between w-full">
                            <div className="flex flex-col gap-2.5 items-start justify-center w-auto">
                              <Button
                                className="flex h-[50px] items-center justify-center rounded-[12px] w-[50px]"
                                color="deep_purple_50"
                                size="md"
                              >
                                <Img src="images/img_bag.svg" alt="bag" />
                              </Button>
                              <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                                <Text
                                  className="text-indigo-800 text-lg w-auto"
                                  size="txtInterMedium18"
                                >
                                  Math Assessment
                                </Text>
                                <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                                  <Text
                                    className="text-indigo-800 text-sm w-[26px]"
                                    size="txtInterSemiBold14Indigo800"
                                  >
                                    Job
                                  </Text>
                                  <Line className="bg-gray-300_01 h-4 w-px" />
                                  <div className="flex flex-row gap-1 h-[22px] md:h-auto items-center justify-start w-auto">
                                    <Img
                                      className="h-3.5 w-3.5"
                                      src="images/img_calendartoday.svg"
                                      alt="calendartoday"
                                    />
                                    <Text
                                      className="text-blue_gray-300 text-xs w-auto"
                                      size="txtInterMedium12Bluegray300"
                                    >
                                      20 Apr 2023
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Button
                              className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                              shape="circle"
                              size="xs"
                            >
                              <Img
                                className="h-5"
                                src="images/img_3dot.svg"
                                alt="3dot"
                              />
                            </Button>
                          </div>
                          <Line className="bg-gray-300_01 h-px w-full" />
                          <div className="flex flex-row gap-5 items-center justify-between w-full">
                            <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                              <div className="flex flex-col gap-[-1px] items-start justify-start w-auto">
                                <Text
                                  className="text-indigo-800 text-sm w-auto"
                                  size="txtInterSemiBold14Indigo800"
                                >
                                  00
                                </Text>
                                <Text
                                  className="text-indigo-800 text-xs w-auto"
                                  size="txtInterMedium12"
                                >
                                  Duration
                                </Text>
                              </div>
                              <div className="flex flex-col gap-[-1px] items-start justify-start w-auto">
                                <Text
                                  className="text-indigo-800 text-sm w-auto"
                                  size="txtInterSemiBold14Indigo800"
                                >
                                  00
                                </Text>
                                <Text
                                  className="text-indigo-800 text-xs w-auto"
                                  size="txtInterMedium12"
                                >
                                  Questions
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                              <Button
                                className="border border-indigo-800 border-solid cursor-pointer flex items-center justify-center min-w-[77px] rounded-[15px]"
                                leftIcon={
                                  <Img
                                    className="h-5 mr-1"
                                    src="images/img_link.svg"
                                    alt="link"
                                  />
                                }
                                size="xs"
                              >
                                <div className="!text-indigo-800 font-medium text-left text-sm">
                                  Share
                                </div>
                              </Button>
                              <div className="flex flex-col items-center justify-start w-auto">
                                <div className="h-[30px] relative w-[58px]">
                                  <div className="absolute md:h-[27px] h-[30px] inset-y-[0] left-[0] my-auto w-[76%]">
                                    <div className="absolute bg-deep_purple-A200 border border-solid border-white-A700 flex flex-col md:h-auto h-full inset-y-[0] items-end justify-center left-[0] my-auto px-1.5 py-[5px] rounded-[50%] w-[30px]">
                                      <Text
                                        className="text-center text-sm text-white-A700"
                                        size="txtInterBold14"
                                      >
                                        LP
                                      </Text>
                                    </div>
                                    <div id='text_2' className="absolute bg-blue-600 border border-solid border-white-A700 flex flex-col md:h-auto h-full inset-y-[0] items-end justify-center my-auto px-1.5 py-[5px] right-[0] rounded-[50%] w-[30px]">
                                      <Text
                                        className="text-center text-sm text-white-A700"
                                        size="txtInterBold14"
                                      >
                                        LP
                                      </Text>
                                    </div>
                                  </div>
                                  <Text
                                    className="absolute bg-pink-400 border border-solid border-white-A700 flex h-full inset-y-[0] items-center justify-center my-auto right-[-1%] rounded-[50%] text-center text-sm text-white-A700 w-[30px]"
                                    size="txtInterBold14"
                                    id='text_3'
                                  >
                                    LP
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainpage;
