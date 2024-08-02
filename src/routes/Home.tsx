import { BREAKPOINTS } from '../styles/helpers';
import { ImageCard, TextCard } from '../components';
import { CarouselCard } from '../components/carousel-card';
import { CardGrid } from '../components/card-grid';
import maazMakrod from '../assets/Maaz_Makrod.png'
import file from '../assets/file.svg';
import mail from '../assets/mail.svg';
import { COLORS, CONTENT_HEIGHT, CONTENT_WIDTH } from '../styles/theme';
import { Link } from '../icons';
import { generateCardWrapperProps, ICON_DEFAULT_PROPS } from '../utils/propHelpers';
import { CardWrapperProps } from '../components/card-wrapper/CardWrapper';
import { IconProps } from '../components/icon/Icon';
import { CardGridProps } from '../components/card-grid/CardGrid';

function Home() {
  const homePageArgs = {
    width: {
      [BREAKPOINTS.DEFAULT]: CONTENT_WIDTH,
    },
    height: {
      [BREAKPOINTS.DEFAULT]: CONTENT_HEIGHT,
    },
    numberRows: {
      [BREAKPOINTS.DEFAULT]: "3",
    },
    numberCols: {
      [BREAKPOINTS.DEFAULT]: "5",
    },
    gap: {
      [BREAKPOINTS.DEFAULT]: "1rem",
    },
    childComponents: [
      {
        startCoordinate: {
          [BREAKPOINTS.DEFAULT]: [1, 1],
        },
        component: <ImageCard
            src={maazMakrod}
            alt='A picture of me, Maaz Makrod'
            aspectRatio='4/3'
            imageWidth={{ [BREAKPOINTS.DEFAULT]: '100%'}}
            imageHeight={{ [BREAKPOINTS.DEFAULT]: '100%'}}
            objectFit='cover'
            lazyLoad
            cardWrapperProps={generateCardWrapperProps('secondary', '0px', {
              blob: false,
            }, true) as CardWrapperProps}
          />,
      },
      {
        startCoordinate: {
          [BREAKPOINTS.DEFAULT]: [1, 2]
        },
        endCoordinate: {
          [BREAKPOINTS.DEFAULT]: [1, 3]
        },
        component: <TextCard 
            useFlex
            horizontalPosition='left'
            verticalPosition='top'
            textProps={[
              {
                content: {
                  text: `Hi there, I'm Maaz! Currently, I study Computer Engineering at the Univeristy of Toronto`,
                  color: COLORS.white,
                  tagName: 'h1',
                  types: ['pLarge'],
                  fade: true,
                }
              }
            ]}
            cardWrapperProps={{
              ...generateCardWrapperProps('primary', '10px', {
                  blob: true,
                  blobAnimations: {
                    animateBlobPosition: true,
                    pulseBlob: true,
                    growBlob: true
                  },
                  blobSize: 'medium',
                  blobPosition: {
                    bottom: -30,
                    left: 0,
                  },
                  startingBlobShape: 0,
                },
                true
              ) as CardWrapperProps,
              icon: {
                ...ICON_DEFAULT_PROPS['primary'],
                SvgImage: Link,
                url: '/about',
                position: {
                  bottom: 5,
                  right: 10,
                }
              } as IconProps
            }}
          />
      },
      {
        startCoordinate: {
          [BREAKPOINTS.DEFAULT]: [2,1]
        },
        endCoordinate: {
          [BREAKPOINTS.DEFAULT]: [3,2]
        },
        component: <TextCard 
            useFlex
            horizontalPosition='left'
            verticalPosition='bottom'
            textProps={[
              {
                content: {
                  text: `Over the past few years, I've developed some pretty cool stuff. From modeling software, to computation engines, to AI models, and large scale websites`,
                  color: COLORS.primary,
                  tagName: 'h1',
                  types: ['pLarge'],
                  fade: true,
                }
              }
            ]}
            cardWrapperProps={{
              ...generateCardWrapperProps('secondary', '10px', {
                  blob: true,
                  blobAnimations: {
                    animateBlobPosition: true,
                    pulseBlob: true,
                    growBlob: true
                  },
                  blobSize: 'large',
                  blobPosition: {
                    right: 0,
                    top: 5,
                  },
                  startingBlobShape: 1,
                  blobMovementOptions: 0
                }, true
              ) as CardWrapperProps,
              icon: {
                ...ICON_DEFAULT_PROPS['primary'],
                SvgImage: Link,
                url: '/experience',
                position: {
                  top: 5,
                  left: 5,
                }
              } as IconProps
            }}
          />
      },
      {
        startCoordinate: {
          [BREAKPOINTS.DEFAULT]: [2, 3],
        },
        component: <ImageCard
            src={file}
            alt='My resume'
            aspectRatio='4/3'
            imageWidth={{ [BREAKPOINTS.DEFAULT]: '100%'}}
            imageHeight={{ [BREAKPOINTS.DEFAULT]: '100%'}}
            objectFit='fill'
            lazyLoad
            cardWrapperProps={{
              ...generateCardWrapperProps('secondary', '0px', {
                blob: false,
              },
              true, {
                overlay: true,
                slideUpOverlay: true
              }),
              icon: {
                SvgImage: Link,
                url: 'mailto:maaz.makrod@gmail.com',
                position: {
                  bottom: 10,
                  left: 10,
                },
                ...ICON_DEFAULT_PROPS['primary']
              } as IconProps,
              overlay:<TextCard 
                  useFlex
                  horizontalPosition='right'
                  verticalPosition='top'
                  textProps={[
                    {
                      content: {
                        text: `Take a look at my `,
                        color: COLORS.white,
                        tagName: 'p',
                        types: ['pLarge', 'bold'],
                        fade: true,
                        nestedText: [
                          {
                            content:{
                              text: `resume`,
                              color: COLORS.white,
                              tagName: 'span',
                              types: ['pLarge'],
                              margin: '0',
                              fade: true,
                              underline: true,
                              underlineColor: `${COLORS.white} 0 0`,
                              underlineSize: {
                                [BREAKPOINTS.DEFAULT]: '2px',
                              },
                            }
                          }
                        ]
                      }
                    }
                  ]}
                  cardWrapperProps={generateCardWrapperProps('primary', '10px', {
                    blob: true,
                    blobAnimations: {
                      animateBlobPosition: false,
                      pulseBlob: false,
                      growBlob: false,
                    },
                    blobSize: 'small',
                    startingBlobShape: 2,
                    blobPosition: {
                      top: 35,
                      left: 40,
                    }
                  }) as CardWrapperProps}
                />,
            } as CardWrapperProps}
          />,
      },
      {
        startCoordinate: {
          [BREAKPOINTS.DEFAULT]: [3, 3],
        },
        component: <ImageCard
            src={mail}
            alt='Send me an email'
            aspectRatio='4/3'
            imageWidth={{ [BREAKPOINTS.DEFAULT]: '100%'}}
            imageHeight={{ [BREAKPOINTS.DEFAULT]: '100%'}}
            objectFit='fill'
            lazyLoad
            cardWrapperProps={{
              ...generateCardWrapperProps('primary', '0px', {
                blob: false,
              },
              true, {
                overlay: true,
                slideUpOverlay: true
              }),
              overlayBackgroundColor: COLORS.primary,
              icon: {
                SvgImage: Link,
                url: 'mailto:maaz.makrod@gmail.com',
                position: {
                  top: 10,
                  right: 10,
                },
                ...ICON_DEFAULT_PROPS['primary'],
              } as IconProps,
              overlay:<TextCard 
                  useFlex
                  horizontalPosition='left'
                  verticalPosition='bottom'
                  textProps={[
                    {
                      content: {
                        text: `Send me an `,
                        color: COLORS.primary,
                        tagName: 'p',
                        types: ['pLarge', 'bold'],
                        fade: true,
                        nestedText: [
                          {
                            content:{
                              text: `email`,
                              color: COLORS.primary,
                              tagName: 'span',
                              types: ['pLarge'],
                              margin: '0',
                              fade: true,
                              underline: true,
                              underlineColor: `${COLORS.primary} 0 0`,
                              underlineSize: {
                                [BREAKPOINTS.DEFAULT]: '2px',
                              },
                            }
                          }
                        ]
                      }
                    }
                  ]}
                  cardWrapperProps={generateCardWrapperProps('secondary', '10px', {
                    blob: true,
                    blobAnimations: {
                      animateBlobPosition: false,
                      pulseBlob: false,
                      growBlob: false,
                    },
                    blobSize: 'small',
                    startingBlobShape: 3,
                    blobPosition: {
                      top: 10,
                      left: 15,
                    }
                  }) as CardWrapperProps}
                />,
            } as CardWrapperProps}
          />,
      },
      {
        startCoordinate: {
          [BREAKPOINTS.DEFAULT]: [4, 1],
        },
        endCoordinate: {
          [BREAKPOINTS.DEFAULT]: [5, 3],
        },
        component: <CarouselCard
          width = {{ [BREAKPOINTS.DEFAULT]: "100%" }}
          height = {{ [BREAKPOINTS.DEFAULT]: "100%" }}
          slides = {[
            <TextCard
              cardWrapperProps={{
                ...generateCardWrapperProps('primary', '10px', {
                  blob: true,
                  blobAnimations: {
                    growBlob: true,
                    pulseBlob: true,
                    animateBlobPosition: true,
                  },
                  blobSize: 'large',
                  blobPosition: {
                    top: 0,
                    left: 20,
                  },
                  blobMovementOptions: 1,
                }, true) as CardWrapperProps,
                icon: {
                  ...ICON_DEFAULT_PROPS['primary'],
                  SvgImage: Link,
                  url: '/projects',
                  position: {
                    top: 6,
                    left: 5,
                  }
                } as IconProps
              }}
              textProps={[
                {
                  content: {
                    text: `Projects`,
                    color: COLORS.white,
                    tagName: 'p',
                    types: ['h1', 'bold'],
                    fade: true,
                    underline: true,
                    underlineColor: `${COLORS.white} 0 0`,
                    underlineSize: {
                      [BREAKPOINTS.DEFAULT]: '5px',
                    },
                  }
                }
              ]}
            />,
          ]}
          borderRadius ={{
            [BREAKPOINTS.DEFAULT]: "20px",
          }}
          autoplay={false}
          playBtn
          playBtnProps= {{
            position: {
              top: 5,
              right: 5,
            },
            width: { [BREAKPOINTS.DEFAULT]: "50px" },
            height: { [BREAKPOINTS.DEFAULT]: "50px" },
            color: COLORS.quaternary,
            hoverOptions: {
              color: COLORS.accent,
              timing: 1000,
              easingFunction: "ease-in-out",
              filter: `drop-shadow(2px 5px 10px ${COLORS.accent})`,
            },
          }}
          paginationBullets
          paginationBulletOptions = {{
            backgroundColor: `${COLORS.quaternary}61`,
            size: 10,
            color: COLORS.quinary,
            hoverOptions: {
              color: COLORS.accent,
              timing: 500,
            },
          }}
        />,
      },
    ],
  };

  return <CardGrid {...homePageArgs as CardGridProps} />
}

export default Home;