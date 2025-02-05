import {
  Button,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'transparent',
          marginBottom: 20,
        }}>
        <View style={styles.HeaderLeft}>
          <View style={[styles.Header, { paddingLeft: 10 }]}>
            <Icon name="near-me" size={30} color={'#fff'} />
            <Text style={[styles.HeaderTxt]}>Campus Punjab</Text>
            <Icon name="keyboard-arrow-down" size={30} color={'#fff'} />
          </View>
          <View>
            <Text style={[styles.HLTxt, { marginTop: -18 }]}>
              Chitkara University, Punjab
            </Text>
          </View>
        </View>
        <View style={styles.HeaderRight}>
          <TouchableOpacity style={styles.HButton}>
            <View>
              <Icon name="home" size={30} color="#fff" />
            </View>
            <View>
              <View>
                <Text
                  style={{ textAlign: 'center', color: '#fff', marginTop: -2 }}>
                  Umoney
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#fff',
                    marginTop: -4,
                    fontWeight: '700',
                  }}>
                  ₹6
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.mainCont}>
        <View>
          <TextInput
            style={[styles.textInput, { marginTop: -30 }]}
            placeholder=" Search Food..."
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{height:900}}>
          <View style={styles.mainHeader}>
            <View style={styles.mainHeaderLeft}>
              <View style={[styles.mainHeaderLeftL, { marginTop: -7 }]}>
                <View>
                  <Text style={styles.mainHeaderTxt1}>Gym</Text>
                </View>
                <View>
                  <Text style={styles.mainHeaderTxt2}>Get</Text>
                </View>
                <View>
                  <Text style={styles.mainHeaderTxt2}>Membership</Text>
                </View>
              </View>
              <View style={styles.mainHeaderR}>
                <Image
                  style={{ height: 70, width: 70 }}
                  source={{
                    uri: 'data:image/png;base64,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',
                  }}
                />
              </View>
            </View>
            <View style={styles.mainHeaderRight}>
              <View style={[styles.mainHeaderLeftL, { marginTop: -7 }]}>
                <View>
                  <Text style={styles.mainHeaderTxt1}>Uniform</Text>
                </View>
                <View>
                  <Text style={styles.mainHeaderTxt2}>Professiona</Text>
                </View>
                <View>
                  <Text style={styles.mainHeaderTxt2}>lism starts</Text>
                </View>
                <View>
                  <Text style={styles.mainHeaderTxt2}>here</Text>
                </View>
              </View>
              <View style={styles.mainHeaderR}>
                <Image
                  style={{ height: 80, width: 90, marginLeft: -10 }}
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLTamX8rMndaIAW9HUZoDJuC9al0EJFZ59OA&s',
                  }}
                />
              </View>
            </View>
          </View>
          <View style={styles.mainCenter}>
            <View style={styles.mainCenterTop}>
              <View style={styles.mainCenterL}>
                <View>
                  <TouchableOpacity style={styles.mainCenterOpacity}>
                    <Icon name="star" size={20} color={'yellow'} />
                    <Text style={{ fontSize: 12, color: 'green' }}>
                      Newly Launched
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '900',
                      fontFamily: 'Rubik-Italic-VariableFont_wght',
                    }}>
                    Venky's
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '800',
                      color: 'grey',
                      fontFamily: 'Rubik-Italic-VariableFont_wght',
                    }}>
                    Venky's-CU Punjab Rajpura
                  </Text>
                  <TouchableOpacity style={styles.mainCenterOpacity2}>
                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: '900',
                        color: 'white',
                        fontFamily: 'Rubik-Italic-VariableFont_wght',
                      }}>
                      Full menu
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.mainCenterR}>
                <ImageBackground
                  style={{
                    width: '90%',
                    height: 90,
                    borderRadius: 20,
                    marginLeft: 40,
                  }}
                  source={{
                    uri: 'data:image/jpeg;base64,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',
                  }}
                />
              </View>
            </View>
            <View style={styles.mainCenterBottom}>
              <ScrollView
                horizontal
                style={styles.scrollView}
                showsHorizontalScrollIndicator={false}>
                <View style={{ borderRadius: 10, overflow: 'hidden' }}>
                  <ImageBackground
                    source={{
                      uri: 'data:image/jpeg;base64,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',
                    }}
                    style={[styles.scrollImg]}>
                    <LinearGradient
                      colors={['rgba(255, 255, 255, 0)', '#000000']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 0.85 }}
                      locations={[0.6, 1]}
                      style={styles.gradient}>
                      <View>
                        <Text style={{ color: 'white' }}>Non-ve...</Text>
                      </View>
                    </LinearGradient>
                  </ImageBackground>
                </View>
                <View style={{ borderRadius: 10, overflow: 'hidden' }}>
                  <ImageBackground
                    source={{
                      uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMVFRUVFRUYFxcVFxYXFRUXFxYXFhUVFxUYHSggGBolHhYWITEhJSkrLi4uFyAzODMtNygtLisBCgoKDg0OGhAQGy0gHyYvLS0vLS0tLS0tLS0tLS8tKy0tLS0tKy8tLS0tLy0tLS0tNS0tLSstLS0tLy0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAECAwUGBwj/xABAEAABAwIEAwUGBAQFAwUAAAABAAIRAyEEEjFBBQZREyJhcYEUMpGhsdEjQlLhBxXB8DNicpLxgqKyFkNEU9L/xAAaAQACAwEBAAAAAAAAAAAAAAAAAgEDBAUG/8QAMREAAgIBAgMECQUBAQAAAAAAAAECEQMEIRIxQQUiUaETFTJSYXGBkfBCscHR4RTx/9oADAMBAAIRAxEAPwDhs0WTgpmXN0aGiEo5Br7IYtkok0k5owEEA5aVJoKaSiWmApoAfKVZCuZUCi6sEANTpEp3UCE3bHZSbUJU0RYwclSpyUgLq4wNE1EFdQRZVFsKVUboZ7jKaiLJVVGmlUNlQ16miAvKFXlQ5qqYd1U0QO4TorW1nNVDakFPUqyigLqlTMq3shV0jdWuuigJ06sBQ1KYQpUngFQSM5RVtRwJUMqKCy0VDCZ9QQpBtkIHQbqKJsNwWEzXOisxrBoFZRxgDYCzq9SSVJBWNVMFVBqJbSQAzynwlMucITVFPC1cpQBouw56pLPqYwklJSA9NgdooVJBVNKqQr2tzXWctLe2UKjynpUeqlVpwgCEJZiihBaqKjYCkCBYVEKdOqntKlCk2NnRRAIKJw1YBQxTpNkyIIMoElKq2EVQqw26zcXjRoLn5BEpRirkTCEpuooTnqtxlRp0ydf2RlGkNFz8uva2ijr4Oyk95sop4aUbQ4bP5ZRFKlJsAtLCvcBaD/VcvNrcz/UdXHoMEf0oEZwhnQD0P2RVPhrNMh01/ZaFHE7kDaCQJkR/fqj2ZCfdvr6rnZNTk6t/c0rDCP6Uc+7gdMxGW/UtEed7Kl/LrcxGUOA6OsfUFdlh8gcIa2QJk6eRkK99Nh7xa0g6gWPjpfZLHX5oraT+5RPFhb70F9kefu5Y/SSPUFAV+AVWmxB+K9Up8IpvGbvAeBB+uyVblqASDPS31W/F2hrEuJbr8+pjnptFLZqmeOYjAVWe8w+l0M2ovX63CnCGuGvu3Dvr9Fh4/ltj5DmAHqLFasXbtOs0a+X9MzZOyYvfFP7/ANnACqFeysEbxTlepTuzvjp+b91jNtrYhdvBqceeN43Zyc2nyYXU1RqB0CVQQDdQ7a0KkOV7RRZbOysDFS0q41rKKJEHAKx1VCqaiibLAkqxIUtVNEWKElKEkUwKAVfTrQFUGKYaqS0sFQohl1QxqvpC6ghEi2E1YWU3gyneLIJYLRpnVNF0XQdZUgXToVk201bSIBlxgC5KYLK4tipORug18T0UTmoKxseN5JcKHx+OzuhgIb13P2SoUfBD0maiOi1KdIggaEa+i5GfK5O2ei0unjjWwqTLR0ReDp3Ft9EqGHJjx2131R1Oj0Gp26kLBkmdCKJm8kn0FhA2tsiX0srGkb6RPhuo9kTP9f7/ALlWteXUmjcSAN4kz5/ssjZYWAgEAd6R5QfNadClpGpN/AaoOjRBJmACNx5WWngLyTf6eX7rLkaoiUqQXgcNIcdSDb6wqcLWLnkASASJ8fPyWnhxGlgdtummnRSp4UB7oFiSbePRJwprbmY3l3dhGFMNABuBoPS99kQcQ8WnYEfKR8PmhMZRgkNd+UTFzmEbqqtRLm5Q6xHWbg2WtZJQ7vVeH2MvDGW76htOoKrCTG4I8d7aoZwDh35MDuuAGby8fuEXicQZacoBIuBuel/RX0cFAu6DvAHmR+6seOWR0t65/HwK+NQV8vA5+tw+0kf6Ta/QrmOYeVhWGZgy1BuND4OXpGFgki8NJ/YSVHEYIHWx2S48GTFWXBLceWojNcGRWj55xVF1NxY8Q5pgj+9QoMuvUOeOV+2pmowfiM6fmG7T/ReY0bFer0GsWqx3VSXNfnRnD1WD0Utt0+RYBCYImpUBVRhbqM1jAKxirJV9BshKSQJEpilUZdOxtkWAoSSSRYURv0KsfTLTDgQV3GA5L7StTp9plzE96JiASbdbKnnvlVuDfSa2rnzhxgtALYIE22M/JZpWmkXKmjkWSdldSaToFEuLbBTw9UhMQH4fBVHaNn4JVuH1Bq36Ld5T4xTp1CazS5pFrAwfJG8y8YpVCDSaQPID5KQOMFAjUKFbDOAzRZb2Ey1qrGaDfRGc50WUmNYzUwmQNHF43E5GEjU2HmVl4SjMSiOLu9ydLn1t9/mp0KrANfuufq8jukdPQQSXEwzD4YTB0JH1A/qfitBlEybXH1kD7IHDYwOsAXEdBO9tEbVrODmt7OpncRDS0gvm1hvJhcmam2dmMooKoUO8NLAR8P3WkKcHwHohRwXG2LsM8DYy37+K6ng3KT6jfxqrWno0ZzfqZEFZMkW2lfmD1GOKtswqbZBB/u//AAnpUoIjQRG831/otninK1djvwS1zYF3GDPlGiHwXAna4ioGeDL7frcPlCon3PadDrUY2rTshhmiACR4aXWhhwyAAdPr5I7D8u4QZZqOBubvAzeZi3pCIZwbC3c172gGPfEW8x/VUyxKe6kimWrg9t/sD0qzWAktzXMHbbbwui6HEaUe/EbWm9vUIJ+ApQQ/EjWDMR/tJ1SNPh7HBr6wdsCasA2m4aQIT4FJdV+fLcpySxPxb+H+h9KtSM94Enx1+6m2tSBDS9gPi4A/Vcw/CcPzODazwJ/K9pHoYkhOzheA17V4AN5eIPmYkJlJRe/7EOMPFnYVaAs6bC4OuylSrC4J0CAwYwjGZabyG2Nnkj/uJiVGhhqAeXMxDzb3ZFttYkq2WdKVxa+O5n4U007+GwaypFQ7B311CKrOEgGxket5ny+yF9jom/auPqJ+iHdwQF4f7RUme7ppuCN/OyIZZpNbO34+P55ivgb3bX0DcRRm3gvEOdeHihjKjQIa6Ht8na/MFe70sO4QCc3Q6H1ErzH+M/CiDRxABjvU32695nh+r4hdTs1uOdS5Xs/3X58TJqGpY650cBTak5iGpuKva8r0lnOomVZTqkKLGypEKCR83VPnUXaKKgBy5JVpIIPRKvMrabm1KZBcwyAdD1B8xK5zm3mx+OqtcWCm1jcrWg5tTJJMDw+CDwuCmwKnjuBOpjPsqpRTakWRdKjOD5VtNDAmUdgwDqpINbh9OQp1nbKeEYPkqqrod1UrmBby4JxLPCSiecw5+IAAkBo06m5QTHZH5wIO0eO6hxLHkj3jPTr56LDqtY8U1CCt+Rpw4FNcUnSKKvL9KqGmrVczLNmBpPzSqcMwFEtIdUqEXPaGx8wAJ8lktZVq6gwD+UsHzc7VVcVwtOnk7ziXAlzQ6mS3SPcP1hYXhzZHxTn9Fsa4ZscFwpHYM58o0j3aQFo7jWgWsLeSH4h/FAOj8N1tJi3leV5+/BFx3A6ST8VfQ4X0ak/4tPFd5t/Ul6l3sjrKn8VKxGVrCR4wgHfxBxmrWhp6yZ+SHw/C2NAL4H99FrYTlWpUGam0Ob1kR9VVJaLHu4r5sreol4mPX5w4hUmaxaDs0LLq1cQ+761V3m933Xc0OTazn5C0MjUmI9ANUncl1gCcoIBicw+PkiOt0sNo8K+xU8sn1OEp0KmuZ3xKJZRqH8zl6FS5LbDZeZHvWsfBvTzXRYblXDMBBY2S28mXDxBOh8VTl7XxLlv9BfSPxPH/AOWuOpPxKLwPKpquygQepBjw9V65geD0aGbJ+ZwkOIMAafAqePcwOBJEZR8RpHwWWXbE22oL8+QjyS8Tzal/DyuA4gtEAxDiC6NvBQHKuLZAy1JdplcSPUgwPVd+eLCCZtveAR0+ai3jDQfe8xr81X6x1T5pP6Eenl0Z55i+Xcew90VPAQD8HCyEqYbiNO57ZvpI+S9RbxUOJAfaLRBIt0GqsHE3s3FSdBp5FWR7Sy8pQi/oOtXJHlVHjePpakkeLT+y1OG8/wBdp70f933XpzMVTc0ONNs9InzhVVOB4SsHZqLHX0c0SCOhN/gj/rwZdp4l9P8AxDrWyAuXucHViM0x1DSV1PEcFTxeGfQqF2WoBJbANiHCCR1AWDh+XaNFwNNuQgbWkdD1Whi+IOpsllMvPTMGz5E2VOPN6LLxRTS6W/8AaHefFkjvszynmvkatgWCqXtqUi7LmbILSfdzNPXwK56iwkLo+e+YcZWf2dam6jRsW0zBDo/MXizr7DRYlOq0NXt9HKc8SlOr+G5gnw33eRW1SCra+VZKvsUk4qAEpRdWhwCggXYFJXe2BJTsBs8vuZRDnPJJ2sjOJceFSnlA+XwXRs5owHs7WkszZRbLoQLyYXC8R4hSe5zqYAElZpSVbmpYmuQKx7TqFd7LbM1Y54k0awtLhvFQWEWOqbiIWFsPwQLyG7roKfLb+zLyQIEi11zPCuKtp1mucBEmfUQuj4tzWx9NzWPgRGqHNJjw0sp8gPh3CqtUF4Ngsh1PvkObuQVu8t80MZQNLU3j13WDx3EZadR+hdYHpO6ScYZE3JCzhkwOnswHE8VbJp0mM/SX5QT45Tt5qXDeGNeblo6k7Dy3WLwlmc5WiTIAHif3VPG6bGy05jVNgGu0IN8wE5rSIteOkHFLTSe0XXmO4TriZ2mLwmEYwRWYHA3c86+AA0TDGtyZKFIOcdajyGj/AKQbwuF4Nwy+Z1v6eZ2WxiWsY3vEjxk38lVHs+K9uTl+fAIY295GnQ4XWfiBTq1KYDmuP4bgXCxLbG2sfFZB5hqYSqWh0wdWSLf5mm0oc1vZ8Q6DnbDYyExJaDqRsTB8vIoDilJz6tWrltIeYLZAMCYbaBIv4jRalp8cu7JKhsuPGod1bnonDv4gsfBe4AgAE+7O263Wc5Yc08nbNudyJG+3ovJeC4B1anUDab8ktBfHdBnTNoNvitlvCWUhFQBpAgAi8kS3u6xcE7wfFc3N2Pp3La0LDTuSuzvm8fw+UTXbY9bRfqfJNiObsLF6rTPiXekD0XnzeGvLf8RlVp2Mt22btAJ06lW/yVzGEsYQbQCQ5t9dBI00PXwuj7Gw83J+Qy0kup1PFObcgMNqu6EMAHxXLYrniq8nKx1h+a8eceKKpvq0MorNdTze6SDldAEgB3SRtutB+FpVw0ZWNJs57HEF0nQt0EeS04tDp8fOJZ/xrmjj6/MeJmJAO9jb5p8LjqlQ9+oT8lsV+W3NrBnYl17tl3e8LXOxtqn/APRdWmM73OjUtp957RMd6PdPVbVhx/pighijB2zZq8To0cLlpZXVnlpc+BmawC7Bmu5xcdW7DXZYdDm1x/xGPECZO/jBKPwNMU2RRY/t3vFxLy6iWghp2kkA2BN9tFa5jwAHtpHU/wCJS7SNTILs0+B9EZcGPIlxLcXJjUnZdg+c6UavA6QdVo4bmZjzYPHQkCDtOq51/CqTwXZbyZIO5uLDTfzWXWwFWkc1J8tB9QfHquZk7Nw9NiiWndbHodXjdanYO0vBO21jPVX4PmerYHL6kNn1svNMbxJhvlOe1w6AIFzounfh3A9TAnxMXKxZdHGCXFzZnfEuZ19TH0cQzLXoNe3zFj1BFwfFcfzXy/SpNFbDueGZgHU3wS2dC12pHgb31V+DYW2FpvHj5ITj/Ew4di0zcFx8R+VXdmxzQzqOJvh6rpRHMwGqyUsqZwXqgJZZUxRKswVjdaDCCUyRBmHDpIiqDJSRYUcEKrz+Y/FIYl4BAcYPilWkWUadOVnrxL3fJMgXnqrsNiHtMNcQnFJWUqV1JCu+YYajjq4qkuM6lO5yZuqV8jRiviW50PLNIkyUXzrjRlbRa3uzLnEaugw0emqI5aow2Vg86YqoK7Ng1vdI3BN1Ed0GpcVk23B6OOdTEtAlwLSRuD1nfxCqrOBdmyhsADYCwiSdyVnOxT3wJ0ECwWlgOHA5X1RmaTEA3JtY9Br8CkyVHdj4Zynsh6PEXAxTbnd6wOhKTqJNWk6s/OC6IEZR3iBF7gkT6ol/CD2jm0iWAtLiwyS0Agw7wsDKH4jhizKA3IWgEzOZ8nMHRtEjRLHInyHljklcv8/PmbHEMA959/uCMu4tJiJEQn4JwBxc7tnhrHA0yGEZnTBgDN7piCdBKzsLxEmBlcSNcostGnWxD2E0qZaBq9wuIgmG+Egz6pZSp7s1RhCVs66hzDQwdEUy2nIOVlKlq6RBzPggAkyXA7nWwXAYjG16j3Pc1pDie6zusZcmG2Ntfn4rpeXOEsqB9QvBz5g22Z7CQRcEzJE2B2PWULxcGjVe0hppPquAaJBBi3djpaY/NJE2CenjxcPUHgftLZGBUxtQR3ImIvM+R0KJr1MS2nLx2YOgcHNc7xE+eyrx+Erue1wYZaIAMmzczgL6mJA0mLBbVCvVqAUqs91rSA1nu6gG8ZXt7wzExuRaU6ae5W3KmmAcJqGs8NqvNaYAD3OzMIFw3Nb7wEXXNBrTkqFjwPce11iCe6QQYOnh5LKGEqU6rX/qLiQbEgOgkEm536rqK2Bo18rsS0k5QA4EtJHXMP6pZON78i3EpOO3NeYbwHnNrqYp1g8kaPa6HjUARa0EAwevWxuP4Xh8Rhi72mpRdu1ku7QkXaW2OWBu6JWEzlXDghzH4g2ES+m4zaRPZgEaha9HAspU4LKmWZDqtRrRMWjLlJHXW3RCyRTqxpYZSVtNMlwd/YtDKFJ4zAXPfqlosC60MbsGgSdSYiSH8DgdpVaNZjQx1dNvQeMxZA1OP0qcdk1ru8IbSBdc90HtHyQJJGYdSqOLMqy6viKoLWwRTBJaS0ZiJ94nKLE6RN4hS+9uyttLZczN4k8VXk4aq1nZWce+A49MzZjSxiDOupQXtdQH8UAG1wIb0aTFrxquko8PpwKj8tmnvtyiWhjjnL2CAC4EAXkNnewWI4e5wqV3VHdmWUwGODiMpj8xsYBzdL+cVd2CroQouRz3EeGNMvp2J1aNHE7+crSw/HajqTQWzUaDL9BA3I3d1RzeXq5o56GR4cJdSzRUZMxGa0W38YlYOoJNicpIJktgWvtY/IK2MMWauJXXiZNRipXRbiOI1HfndHQGB8lQxRYJVlFklb4QjFVFUc8nnUcysyCVB4gpqAm6okzEEKJhQUAE+0HokqQUlG4HI4kd4q3CtslicO5roeCD4o/B4SWyqWzSluUCkpsaphuyTdVKIKK7d0+EZJCd7JKNwWFMggbpJF+DnZ2XDobTAVfE+H067ctQaaEat8QqmVYACIa9OjNkk5O2ee8SwXYVjTzSBEHeCJutzl5+YtZAIu4lxADbRJJsNAoc7YQAsqjU90+lx/VB8LxTcj2vLpLQGZYyyXXz7xfZU6iNxL9JOpG9h6xoVC99NtRpdZxBgkyYIOsiPISp4ys2pRexzWkiGtDWXknvX1AAGn3WZhOJ5WZXHM2QYMawRp6qXDcTDzrAa4DqA4mRMdCQsLg1v1R0ozT26M6GlSZTwpaBNQHMCWuGdpYA0xHuhzRa8TtsJj+IPLqVOA0AFrnF+rXAyItAAmJg2Guis7OvUI9mp1agyOa9rWuqC+4Ab3DYI7h/K3EKzX1vZ3sfRpy1tUFrqhaPcaIzOkC3n4qqC3tj5MqXdujW4fQZTwzhRcx7jklrhLRJEwL3iWzfrsFxFOv+Ke0YCSSIFhJc4k5j01E6QFo8NxtUUnurP70uJplsBpBHd85mR8p0GbgKvZOxYAc3tMrg2S5ozOh3+mRHwUY4uDlxP4fUaU7po2sI4U2Ew1zmCRclzHTv/umfqsd/4r+1IcMl3hoy3khpJgwZi8RI2lXe3sqAEEWGU3ABb0vpvotajXpuM02MaMhAaXENJDZg3tqYj/heNw33sfaW2xRwNnahzXNYajmyXvjKDma4ZBaLNi1hOiG4gKtM9mwhzWNAG5E5nEZRqPTr1UauKLc5a4NtHV0X3bfVV4XiDzTLRIkATHds4EQTvM/2U3FN7vkQ1FbJ0yNfidduRpcymXGBLBmJNxA92bjbcK91Euqn2hzqxcAJJIa2Tc5Y2jQCNFs4XiwdlpuDQGXaXXIIIdlmLCW+KB7dgqVKQfmcQXNblIIBMn8Q6mHAxGgVXpWn3VQ/B77sLa5jclMtYabMnfEM0M03ExE2t16yFPA4jPhXBz34h7H5QO6JaRkyvDmzOZzT3QQIm0EivhOKq03dnmYwOBvUAcP8ut48fBamJfTHZP8A/ea9veaG5ahJkNIAm1/O6sWopU3YjwK7SDMK4UWZKeWo4NjtAMvccSe8Zd3IytBIkdb2zcVxcYcNosBaaoLiXFuRx0IZTjfaSNhpCJq4otqFgY5jawdFNgykiSGN7PY91x63mLK7DcExGIex7qTyXZyHMphhpgmzS+rYQC64gmUiyOUq6CtRirZXg69LsS6qPfpgPY5pmW5mtIiCBqNDq02Xn3Em0wH9nI70DeWg2BI8I+C9gofw/rVe5iajWUASWspOcalzeXOECd9ftynPP8Pa9G2DpvrUfegZS9lu9NwXGRaATfwWzBCUZpy23MWo1EJRaTvY88pP2R1KwlAZS1xa4Frhq1wLXDzabhXdquyjjsINzKZxBQ4qKbXBSwCi0QqQ5Vdom7RLZIQKqZDZ0kAbmIbTrN74B+qDpcIe1pLBmYNfBVGqZt8lr8F4m+nbLIOo6hYVxLkbrje5yeJbDihhqui47gAamam0gG8HYrNHC3+Cvim0UuUU+YE1ez4KpgBwumzKztDTZbLD+0tmcXecryqnwtw1IXQ43iDX02sbTazLF5JmE3DK+RZDPjjFq9zN4hW/Efl90GAose/LmbfqNwpUyWuzNdBGhGq2mcztY0doySIu3r1jZZtZLPjinijf1/gTTrFklU3RyXF8R2jCx4cLyDGhCxcLhHFri3vBp2XqFDmLDVKjXZcsa90CfM9dlrPxHDngvqU6YcWxZovlnKLbLmz7UyR2ljZtjo4p3FnnnLXJuIxTO1zso05gF4Jc6DqGjbW8r1TgPJ2CpNbnBrOAu6oTB/6AcsecoLhvHuHMaA9zWAWAJzNHhHqimcw4J0Cm9rh1acuniCufqtZqZu1FpfL92aMeGMdr3O5wFRjWhjGta0WDWgAAeAC0qLgvNKPNOFY7K+oxg8al/DUrcwfNFCBDzcWOoM6XFoS4dVkg+/H6leXTX7JucX5WwmIcX1aNNz3AAuMyY0mNT4qrhXA6WGaadINDCdPrc6oXBcfZUkOqNadrj+myqrcRAcS+qMoiCLfHqp1Gtg6ai/v/AARDBlVxbNSrwrDuBD6NNwOoLGkfMIWpyjgHMLfZaMXPdYGuE9HNghVniNMi1QfEfRPQx7ItU26j1SR10Yuq2+YPDPxZHDcj8Pb/APHaZ1lzzNoOrkRiuSsJUZlY11GBA7IwB07hlvyUqePbHvzHXzRDOJgGMwWmGvwvaX8FTx5k7Tfmc47+GLA7NTxDg6Qe8xpEjqAQub5k5C4iTnayg/KTHZPd2jgY/WGgbwAV6R/NpMSPS8KY4jBu4fQfVMtbpLtDcWoSps+eXYmtJpCjWzsMOpsouc+mf80ixJ8Nlv8AD+A4mqab3YLFfhye4HUi+wgvnceEG5C9mr8bptIzZZPrKjU42GibAeX7qyWp0q5SHWXP7tnn/KWFBxQIZV7UNlz6oIfTaXZsrwd5JAsCco209SbiIb3lm/zZpuS0yBcC8fVDPx9OqSBU01iLfFUPWY8bcsTtvoJkjPLXEqo3cNVzX2RBcFz+FxTaYHfsesSqqvGhPvCNrj+yrIdqQhjXH7RS9LKUu7yDeYuXcLjKZZiKbXEizwAKjDsWvFx9DvK8B4lyHj6VSoxuHfUYxzg2ozKQ9oPdcGzNxtC92pYpjvzHyn6rjecufxQfUw+GE1G93OfdY4gH/qIn4hatP2jkyusUU/r59KRXPAo+06PFyCCQZBBIINiCNQRsU+Yoqrh3vc57nS5xLiTuSZJ+JSGBf4Lu/MybA+ZSZTJ0RIwp3BUmNg7jxIQAP7K5JdHQ4fRc0E4lgJ2III+SSCLAxX8E4xZCHkHQg+RBUXnqqR9gipiSd0JVe7aU3bDa6QqnohToHFMrNfzUTUTYlp1kIfM3d/wVydlbVBJeq6xkQVFtSluXFWnEUYPccTBgkqXuiFzAaBftCINV43BPTRZWHxZCudWJ0XNljdnYhK1sGue4+8B8VWaPgB85UDmMWOyeHaJUq5D7k2NboWgjw+y08NxPIMrSQ3yMDr81mMpuzADUozDUyCS7RrgCOoP/ACq8ii1vuWwckbPC+Iw7Me9HwPgugONbVEmxA6i3ksnC4mk1oHZMIA3/ADaWJRTK2HcJbRmAe6ajiD6H+5XIzRUpXwvy/s3xutw/DUHFs06b3jrYAjwJ19EW3HtaMrmvpPGkg+tim4ZzIwU2tYwtAFpMq/EcdcWd4NcLWIBIWOUZN1KPmOPgcc0mDUM+UBE1sS39c+Uk/IKnCYrDvILqYHk4C99vgjqePaGxSAAnQAfRZ5xSd0wfyMiriXa03E+sIahzG5joeC6DofutLiXEmg/iUxrfugfBwUqlOi9gLKQkiQ4MzR67qxcNd6NpkSVlNbmljzIpuzf6QTO0ELPxHFaxuaRjoZy+t0dR4h2IOZrXMmJaGgt822KtxPFKToJE9Bt5eSlKMX3YWvmLwrkZWH4jiiO4Hx/kED4j7qNAYp5LgXydiHSPVdRw/HNyyRH1HRaVDE0NWZWnciM3UwpjlW/dSK5Lh6HL4PhVcjMapnW4dEDxJB+Ss4tg6+Vvd797u/w2tAnNa58l1X80pRJc1xG0yfOy5rjvHCyhUqPIJykN8XGYVsEpSj1be2xVKckm+VHmx5lxILhTxFQMcdjFtBG7fRAUzuf3KFZRdsQiGMf0C9ljxQx+xGvkjz8pym7k7CA9TFQoXO4fkKcYrq1w9E9iBraxTCsVQ3GsUvagi0BaajuiZUHGn9KSAOfr8HxFM96k8eQJ+YVLcTVZbM4eB+xXp1GBbwlW1aLHCHtDr7iZm3j0Wf03ijS9P4M8wbxSqPzT5gK1vGH7hvzXU8Z5Spvl9A5Hfp1addOm2k+S4vEYR7CQ4ER8PirFKMiqUJRNFvGerPgfuk7HMdsR6LHUg5NSXISzWa4HRw+acsdtdZjK0IuhiwFNsgrq4d4MhpVlFzt2laeFxQO6PpvB6JJJPmWwyyhyKsHxNoABb4aeqMOLpHMRAJvMJhRB2CQw46BZXpIN2ma12hNLkiAx9PM2bbEx4qipiwDUGocT8jYj4BEHDD9ITHDj9IQtJFdQfaEn+koZXV9DHFpt8d03s46Jjhh0Q9JF9SV2hJdPMKZiG3g2M7wBOyI9uGUGb6G+p1WZ2A6Juy/u6rehT6li7Tfu+ZojiDfsf3VlXjTm5MrjE6bGOqyxTPj81LKfH4qPV8erD1nL3TtcNzJRLPx3McLQ0NzO8iClh+aMPTgUhVsTbRsEyYF1xjWn9R+JUwXfrd/uP3Wf1Pj8WT60l7p2p4hSrhwa6CRMPEabT5K9uIptZOYNMA9fAW+HzXBEO/U7/cVAsPU/EpfU8eXE6G9av3fM6qtxstd3e8Oo6eFoUKmNpuEw4uMzmJaBPlruuXFM+KdtBXLsrGuTYj7Tm/0o1Rj3BxyMcG5jJDSTGwA1O/hohuLYiviXCaZYxvutkT5u6lDtw3grGYcdAtWLSYsclJLdGTLq8mRcL5FTOGv6D1cwfUq4cOP6qY86lP8A/StbRHQKxtMLXxGaij+X9a1Ier3f+LSpewt3rA/6abz/AOWVXZR1T2UcTCgU8MonU1D5MY3553fRPS4ZQGlOof8AVVt8G0x9UT2jRum9qYN0Wwoj7LT/APpp/wC6v/SqkmPE6f6h8UlNsKB8TxBo363hCO5mY0b/ADTpLPCKk9zVObitiVLm1ovlIHWE1fGYfE6S136gNdrghJJTOCStCwyNumc/xbhRputBB0I39NllJJJ8Um1uJmik9hJJJK0pJNnZXsxVRu5SSUDVtYdQ408aifJEt475pJIoCY40Fczi7TqkkloC5vE2+Kl7e1JJRZND+3BL2wJJIsCQxgS9rCSSLChjjAmOOCSSLChvbmpvb2pkkAI8RCQ4mAkkgBfzYeKZ3F0kkwFTuNKl3GikkoAgeLPVb+Iv6p0lJDKvbHH8xUu09Ukk6QrEHpJJIA//2Q==',
                    }}
                    style={[styles.scrollImg]}>
                    <LinearGradient
                      colors={['rgba(255, 255, 255, 0)', '#000000']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 0.85 }}
                      locations={[0.6, 1]}
                      style={styles.gradient}>
                      <View>
                        <Text style={{ color: 'white' }}>Veg Burgers</Text>
                      </View>
                    </LinearGradient>
                  </ImageBackground>
                </View>
                <View style={{ borderRadius: 10, overflow: 'hidden' }}>
                  <ImageBackground
                    source={{
                      uri: 'data:image/jpeg;base64,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',
                    }}
                    style={[styles.scrollImg]}>
                    <LinearGradient
                      colors={['rgba(255, 255, 255, 0)', '#000000']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 0.85 }}
                      locations={[0.6, 1]}
                      style={styles.gradient}>
                      <View>
                        <Text style={{ color: 'white' }}>Non-ve...</Text>
                      </View>
                    </LinearGradient>
                  </ImageBackground>
                </View>
                <View style={{ borderRadius: 10, overflow: 'hidden' }}>
                  <ImageBackground
                    source={{
                      uri: 'data:image/jpeg;base64,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',
                    }}
                    style={[styles.scrollImg]}>
                    <LinearGradient
                      colors={['rgba(255, 255, 255, 0)', '#000000']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 0.85 }}
                      locations={[0.6, 1]}
                      style={styles.gradient}>
                      <View>
                        <Text style={{ color: 'white' }}>Veg Wraps</Text>
                      </View>
                    </LinearGradient>
                  </ImageBackground>
                </View>
                <View style={{ borderRadius: 10, overflow: 'hidden' }}>
                  <ImageBackground
                    source={{
                      uri: 'data:image/jpeg;base64,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',
                    }}
                    style={[styles.scrollImg]}>
                    <LinearGradient
                      colors={['rgba(255, 255, 255, 0)', '#000000']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 0.85 }}
                      locations={[0.6, 1]}
                      style={styles.gradient}>
                      <View>
                        <Text style={{ color: 'white' }}>Heat & Serve</Text>
                      </View>
                    </LinearGradient>
                  </ImageBackground>
                </View>
                <View style={{ borderRadius: 10, overflow: 'hidden' }}>
                  <ImageBackground
                    source={{
                      uri: 'data:image/jpeg;base64,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',
                    }}
                    style={[styles.scrollImg]}>
                    <LinearGradient
                      colors={['rgba(255, 255, 255, 0)', '#000000']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 0.85 }}
                      locations={[0.6, 1]}
                      style={styles.gradient}>
                      <View>
                        <Text style={{ color: 'white' }}>Fry & Serve</Text>
                      </View>
                    </LinearGradient>
                  </ImageBackground>
                </View>
                <View style={{ borderRadius: 10, overflow: 'hidden' }}>
                  <ImageBackground
                    source={{
                      uri: 'data:image/jpeg;base64,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',
                    }}
                    style={[styles.scrollImg]}>
                    <LinearGradient
                      colors={['rgba(255, 255, 255, 0)', '#000000']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 0.85 }}
                      locations={[0.6, 1]}
                      style={styles.gradient}>
                      <View>
                        <Text style={{ color: 'white' }}>Desserts</Text>
                      </View>
                    </LinearGradient>
                  </ImageBackground>
                </View>
                <View style={{ borderRadius: 10, overflow: 'hidden' }}>
                  <ImageBackground
                    source={{
                      uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExIVFhUXFhcXFxUVGBgYGBgWFRgXFhgXFhYYHSggGBolHhcVITEhJSkrLi4uFx8zODMtNygtLi0BCgoKDg0OGxAQGy8lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALABHwMBEQACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABFEAABAwEEBggBCAkDBQEAAAABAAIRAwQSITEFBkFRYXEHEyKBkaGxwdEUMlJicrLh8CMkMzRCgpLC8RVDU3ODoqPSVf/EABsBAAEFAQEAAAAAAAAAAAAAAAABAgMEBQYH/8QAOREAAgECBAMFBgUDBQEBAAAAAAECAxEEEiExBUFREyIyYZEUcYGhsdEGUsHw8SMzQhUkU3LhkuL/2gAMAwEAAhEDEQA/AO3oACBAIFAgAIEAgUNAAQAEAGgAIACAAgAIACAAgAIACAAgAIACAAgAIACAAgAIACAAgAIACAAgAIACAAgAIAJACUAGgAIACBAIACBQ0ABAgECgQAEABAAQAEABAAQAaAAgAIACAAgAIACAAgAIACAAgAIACAAgAIACAAgAIACACQAlAgECgQALwQIC8N4QALw3hAADhvCBQw4b0CBoACBQIEAgUEoAKUAHKAAgAIANAAQAEABAAQAEAECgA0ABAAQAEAIqPgYZoArWacoF1wV2l30RifAJMyJ/Zqtr5RdTSgGZw2dl4PgWouCoSf8AKEWfTEuh1NzWnJxIxPEZhFxZULRumWYcEpXDQAEAEgAkCFbpm2OpgRkYbIIkOcYETh4pG7IRuxH0dpGoWgPbTLxg7t3XSN7S2JjHAxuwRqF2TGW4n/bJ+y+kf7go+0f5X8vuJm8hRtrv+Gp3Glj/AOxCqP8AK/l9xHN/lfy+41XtFRwjq6rd8dXe7jfR2j/K/l9xMzfJ/L7gtlreKbrtN966QCerzjAntd6bKs0tIv5fcVydtvp9yDYaL2lrheADGMFO9Tu9kHtYuPaOG7JEZPo/l9xIpks24sIFQUmS6Gk1Q0mchAGLu9S36jr23JzKxh3Ab/dOHET5e6BNPPYXgHuAkEcyEgqHKlUuaR1L4LTiDT2jYb8oFsZ7R/X0nNN2tdyLbt8HZOZuxwzTLsflRoKekGnOnUB/6NWPuJylcbkf7aI1q0tBAp2eq+SLxNKo0AbTi2SctnwSSk1sgUCVStrTnTqD/tVMeXZSqVwcH5eos2jdTqH/AMfvOCW4lgzayI7DhjkYkd8x5pWFhFe2ltS7EiNmc9+BHwTHJpjlG6HKlrAEw8ncGu9QITZ1VHdP0b/QWNNvp6oS6302iXOu/alv3k14mlFXk7e/T6jlQqPRK/u1FttdI5Pae9Kq9N/5IR0ai3TKPTNJ9WsIqtFKBhmZ2wqGJk51Usyy2+Jdw9oU/D3iRRpsbAaSBBBIDi7ugQDip4zgtIv6kMlN6yX0JdheWAtc+pUGwupvDhwkCHDjnzU0KltLt/B/YinC+ui+K+5JqWq6JuPjlJ8BJ8lOmRZfMAtEhpykTBwPfuQJYI1iP9snk5p+8Qgcop8yn0vUe9pb1TiHG7cDmNhpaQTea+SeGXhijuW8PBRlmzLTnZ/YiavaOo2Vt6lZTTe7BwgugDIXhM7ct6SKS5EuJlVqvK5pr4L5CLZaKlau1xbVaxsgNjA4jGAcDhmmvVktGmqVNq6ux51gOMMqkTImJGRABLsRgnpCdvF6Sa/fwLewWh9wB1NxIwmaeMZE9vOM0qM+rCOZtNfP7D5qP2U2jm7HyB9UpDZdRdlquM3oHfKBCQlECSAZTWqtaDU6uiaYimHQ6Q5xk4B2Tee9ZnEMesNa+3MgqOblaJkRaLR1odVbaGuaIxourROBDX0+z3+MqhLjFOSvCS9V+tivKVS+qa+Fy8sj6NN7qgZVY+oBLqlMg4bowbP0c1QnxKpeTpOLfvX0HxcYu9mm+qK2tYn1Kjn0qj2PLib3V1qgLNzgRd3xHBU5YmpNJ1It6a95LXqmV5wzTvC6+DZLsdLMVKlpqGIIFOqxueJuMao41qzVqasv+1/XUfTs/G5P4SS+hMLmNGDHnEZ0qzjd2j5pO9FGu41l39FvqtX5E+iWifowxpyjdumzVhkS0Weo5sjEYlmzittcVhfaKX/aP7uJ2ya1i/RlVpV1aq8Op2cXREGsGtAxnBuLp7gnx4tS/Nf9+g1ylLVR08y30VpKqaVrBe0llEuAaIuntZknHJX8Hje2pzm+RPRk53RktVtNUTaC6pamh5M9W9wYQZjFriCc45RuViE5Ssy3GLS7y1OmVLa1lElgEBsNDctwiNimnPLFsWEM0kigfrPRGD3MptEXiTjBIw/ws322U7RUWr+XL9+ZeeFy63uQrfr3Yy4NFa6IIi64CN5eRc806piaiekHbyav6XGww65se0brHScTfNQlgIAF0tI2G8DJwG1Q9vJazUm1y0J5YfTuta+pD0proAQKFdjYcQ5uBI5nYeHFVHjsZNtRg4rkSU8JRXjd2QtI66FrB1tRjQSAXOe9pIP0SBAPH/KuUcRi7JOLfp9yCpQoJuzQ/YdeaLGMpiv17nHCAXlsu/jqjsQAQN5jJaNSvkjeW5WjQzPRFvp/SVRlsc2DcF3FovnIEkhuIzWXjeIdnXcLpWLWGw6lRzC6+sE4da3DIA3D3g5LFxPEcXVbtJpLbKt/Nu75Fing4rl+pGtP6VwIqPcAMgTE5gk5KhHGV1FqpJ+V2WIJQWsUh2x2+sx4/SODYggkEYYgw7LKMM5z2q5T4riU1ln031Xz/wDCOrhqUo+H9/AubTb31ZFGq0Nwl8jyBy8Ctatj8TVnbDtW/M3b5Pb0bKEMPCmv6sXfoQa1e6e1aajyNlMk914KhUxEqb/q15SfSLt872LMaebWNNL3/YYtlvqlhDXPZhgQXOcNxLjmfBQz4vVbShKy97b+LevpYfDDU73aT9F8v5J1l1mHVNNWQ+II6t5kjCQWgiDn3rfo8Zoyh3pJMqT4dLPaO3vRi9ZdbLTQdQNIi6WPJbUF4E9a8CQCCMBsKlWNzQjOPO/1Nfh/B6eJlUjJ2tbVe4i0ukqqD27NSd9l7merXHzUixq5otv8Myj4ai+KGrZry15L22aHxALqhIHfdkjhMJXjVyRYo8DrRjlc1by/i3x3GxrtBddswAcAC3rOzzu3PwTXi0yX/RKjtmndrnbUZqa1tOPyWnPMf/KHW52+hKuE1Fp2j+ZEZrhaQQAAKc9qmzshw2dr5w7lHHEv4BV4PTauk83XR/YvtB690LPTLTZ6xLnlxDS2BMbS6ScFYji4JGVjOCYmvNOKSSVuX6MkWrpJYR2LNUP26ob90OSvGw5Irw/DOKfilFGg6OtP1bWahe1rWtya0uJnA9pzs/JWKFbtFczeLcM9iypyu38DcSpzFAkAymn3Rar0wBTbyxLp9AuV/EibyrqVasstS4YqFcblJO0a1DFSQjLYb2uZXQn5QcsJT2rxS5De3ltzGq9pLPnHs79g5lOppvSP8kdTESp+Pbr097F0bWx2TgTwz8E105R3RLTxVOfhkgGQef5jgi6yj3J30KW3Wur1twU+xPaqSIiD2Q2ZvXuGW1aFKFLsbvxct/4tYpVKzu4jWijLNJjNvyXHfi2oc+Xoun4Qn7PP3fckwDvUl00ONaxuIrFwH6N8FpOIOGPereDSdNLmjrW7a8h/RVejdJd3tbgT4JK3bRdosniqUldpP4Fvo2wUaofVfRZcBhstwncA4Tu8VSrVqsGoRk7+8mpUKUleUVb3DdosVNjbxpMDnfNAAEjIHinQrVJOyk7IV4ela+VCrJZ6TgRecBua5wmdkzHAzvSzr1o8xI4ai1sVzKFGmSKtK8wmREnuMnIlTOdWavCVmMdCjHxRuXdC12Z7SxlOmzIENaG3W92J5qjOnXjLNJt+/UlgqaVkkCnTD61MtdAL2NA2EAgZb1JC6WVrUhqJau51XS0C1VsMZbj/ACNWVxtP2uXw+iIsIr4ePx+oKbMJmViN8h8pcg3IQITUbPJKnYVOw0KQBENHgE7Ndbj811uOGpxTcozKJ63ecE7KOy2BWaHtnaMkRbiwg3B2MJry0j5Nxp1PKs/4rrsOv9rTfv8AqzZ4LL/cVUvL6GYhPOksmGlTsKxIdKRqwiknsKQOAgQCAEkGUqdhjUrnUOhsm7WOy97NWrgvCcT+KpXqQR0sK6ckKSAY3XG0llppNugh9M4nZddj3Yhc5+IKSlGMulzOxs8skrbiaJN0mTgCQIw5SQuMklcIuXZt32V7WGm1jEgYHIJzhrZlKNdpZktORNYIEzB2ncoHq7GlBZY5r6kC0VIyBLTti9nuG1WIRvvv6GfVqW0irp899/IIMDASyGzm45pW87tLXyCyoRzUtL7tjr7UWgScTgXRiRw2JqpqTdkWJYpxSTer52KzS1rYAcQScI5YTHcVaw9OTa8ilicRSV9dxzUmz36NvOd5gZ/63/FdnwqP9GXoW+Du8JS8zJ6A0L1lFzBUoVmVCHOpOIvsAETdmb2CwsXXdOam04tLdbfwdzRlG1pLQxusOrjrPUu0jg4kgHCA3PHZC18Jjo14Zp8iSdBx8HMt69dwZSoikYGN9uIe0ZnnmqcYJzlUcvh0LeqSjYpbY6rWqkOIaG4NBIwHwV2mqdKCcdbkbzSlqQdLVQA1lKIHzn3mYnhBU9CLbcp+lmQV6lrRh8XdCKGlGdT1dSbwPZiCLuOBJOcxuTpYeXaZ4bcyKOJWXLP4F7oa20TRinc63ERWAMznBnLgFRxFKoql53y+RapzjKHd38yXqxZC+3UW3Y/TU8piL7ZwKljJd1b3aK1dNRk/JnX9YW3bS8/Sa0+V32WNx6FsVfqk/wB+g3APNh0ujf3I9OphCwJLUmlHUcdyTUNVwnVQlUWCgxs1CUuVIdlSG6lMDNPi7j1IGY2I2YbMQ83RCVd4cu87mc6R7NdoWF+9tUf1ODx6rsoQthaXuLXAqn+8rK/T5GEq1g0SU2MHJ2R1VWvGlHNIZstoL5MQNifOCiV8LiZVm21Zch8vAUdrltzjFBhyLApXAXBFhc6DBSDk7q4EAdU6HaUUqzozePQfBa+CXcOA/E8r14o6MFcOYFJAMX0hUe1Z6gMEF7Z53THkVj8aX9FPzMziSdoyRD668AHuJBjsgkDLbGfJcPly+FFKVXPZVJdNFp6k2pDgA0EAQBmOSgV07suVlGccsV9SI6k4YESJ2nAf4UylFmdKnVi8rV158v4HrO1oPzuMc0ybb5FmhCMP8vgCtWY4gHEfnOMkRjJK6HVatKc0par9+gLVaoxAOCKdO+lwxGKUdUtjG25wvzsw/ELZpJ5Tl7xcro2/RpR/VHu2VKr/AAAaz2K63hsMtBeZ1/CYZcOvM55baeNx7G32ksvtwd2DAk8olc/Ug6VWSi3ZN6M7jCyU6auZG32mo6r1fWTeEXiSXBo7TgDxjzWjShBU8+Xb0uStvNkTEW/SFam11RjsCA3s4N3QYzjDklpUaU2oSWu4larKnFzRnaOkagJutHazzOe7HiVoyowsrvYzo4us33Y7k2zUH7ILcoOU5mMVDOceZfhGSegemNFXBIEYYiQYMScskmHxGbQixOGVsxaamauttYhzXiD+0GDI3OJwkYZb1V4jjZYd3TXu5/AMNThk7yZtdQ9EtZpanRZUL2UbziZmSGZYYAAub3pcDN1nGpKNm9SLGSSpO3uOk63UwKlN2Utj+kz7rP8AxFDvwl5Nfv1E4XL+nKPn9StpO3BcvJdS5JdRZY5NuhuaI05kZhPTJE77AEbECe8WwJGIxeA2c03VjdWQtJ5Ybj7fFTUdyaiMdK9ijR9mIzpOY2eDqZB9AvQJ08uHhHol9Clwiu1jZNf5X+pycSqDO8jfmACOKNwSUPMABJxRokIlKUtRbqc4THEJqdiadPMrJ2GhZ3fTHe38U/PHp8yusLVT8a9P/wBEhjYUbdy3COVWAckiFlojsnRRQu2O99Jx8vwIW5h1aCPNeO1M2Ka6G2CnMUWkAzPSCz9WFSJ6uqx3cZYfvqhxKn2mGkijxGP9HN0aZnqFrcGtN3ZsGXNcFKlHM9THp4ieRO3yJYtTy2Q2OahdOCerJ5Yqq43iivtRqHN3nCsU8i2RjYmeJlu/mJs9ikyTkfglnVstBlDCScrydrFmHNbnB7tm5VrN7G1FwhbNYgW3SDIIH5IwVilQle7KeJxlOScYmcteWG384LSprUyacVc6bqdZeqsVBu9t7+sl3oQuzw8MtKKO7wkMlGK8jjfSBos07faLsgOd1g5OaHGO+Vn4qWWq0zoMCr0zBaSa+k89oy4Zk4xO/uU1FxqR2JazlTegmy1S5hZkTHeJEjx/OCWcbSzD6Us0cpFwBMYqXV7kSyxbsh2haKjTge5NlCD3HxlVvoTDXloLzJJgt3kZS6eeChULPu+v/hNJ93vP4EmzgTOO5zdjg4GInaDs4qKe30Y6Ks7nTugqxF1a01yMGi43+YyQO4DxVrDx71/IzMdPRLzOka30Zpsd9F3qFncfhehGXR/UXhc8tRx6ozVMkbYXGPU2ZWYqo+cQ4gjbJjwRFW0aGxjbRoUx1RzcwU1qCYjUIsQJGado9h+j2HGPlNasRtWJDmyDsUadmRp2ZCFnLqlNkzLwOWMnyWjgafa1oxtu0TSqKNOUvIvekGw9dYazQMQA4fyn4Er0GrHNBowMBV7PERkcBbiNyxXoz06m88NxQam3JVDkhYCQkSSDhAoAgEGEgtwEJYq7sNqSSg2zvWo1k6qw0Qcy28f5jI8oW/TVoo8p4jUz4mb8zQBPKQpIBXaxWXrbLWZvpujmBI8wEypHNBx6oirwz05R6ow+gqksGMjCO9eb4tWmYOE0VmWtVhIwwwzOUqpFq+pcqwk1aPqNlg3Tx48E67IXCCWupVWl3awmOCtwWhhYib7TS9vISMYJcRwS7aJDovMk5SaIFrMnAzjHNWKa0Kku9J2d+RFAPWMbE9oYeQ81ewkM9RFvC081VX6o69TpBjWtGTWho5AQuyWh26VlY5V0wt6urSqxg9lwncWmR5HyVDG0czUkaeAqZbo5pa7J10kwCBA/O04qpTqdlojXcFNalXVsxYydoOB5/n1VqNRSkRyg4wIFNhkRnIhTt6FSMXfzLK1taWgPMPk3ow2GBlvjFVoN3vHYu1bSilLcOw6OFSCThujDxRUr5L2Ehh1OzZMq2bGTN3Z4GSBt/wAKGM9LLckqQ1u9juXQ/Y7lhvxF95McBgFoYaNoX6mBjZ5qvuNdpuleoPG4T4YqvxSl2mEmvK/pqJg55a0WZChZi8AyAOeK89lNRdjflVUHYN9njLHikUwVS423s/BPfeHvvD1LEZzzwKjloyKWjEBmOGCdcdccdU7k1IaojurdK9agc7rXH2Huuh4FSzYhPom/0IuITy4e3U1tqp3mubvBHiIXZnPJ2dzzXpKzGnVezKHHzxWLVVptHp2Bk54eMuqI+MZqLQu9624clAt2GDKRiptjoTSdWFNrXchjvH5wRlT3I5PrqOaPZ1lenSGbnNBHAmCVPRptyXvKeOxUadKSvra56Ps9INa1oyaAByAhbh5ZKWZtjqBopIKBwQIcq1flj6tE5Me9o4XHFq4Pi9JQqu3U5mlLLXnS9/1NDWPZ7RMDasWK17ppVJXhab0GnFuxwHfjinJS6FaeR6J2+IwGhvzSJ3FSay3KigqTtB38mN1ycnNA5J8EuTI6rk9JxSKTSFEDtNMtk48RII8QrtKTej3MqrS7KXd1QNW6XWW2kDsId3MIcfIFbXC4Xqo0uExc6yudYcunOvOedNVkvWEPGdN4M8CMfRR1Y3iT4eTjPQ4bYLYTUF5xiD6GPOFRq0koaI2aFVueorSFYExOAHiSkpRaVyxOUdiLYqZLwQYggzxnBS1HaNiGlG8rh2tgmZnmkg9LD6kF4gqFeARJxn8hLKF2NhOKVrlrZqhlofIyjmSMxyEKrOKd8pJNtb7HpbVayilZaLAIAYFq045YpHOVZZptltUZeaW7wR4onHNFxfMbGWVpnOmCCQScCdq83qRcXY69u6TQ45g496juMTYANyQPePsYIxA8YKY30IpPXRh0Z2CeE4/iklYSVgWl4yOHA/HaiCYtOL3RaalURNV/Jvuuw/D8NJz9yKPF5+GPxNK5dGYhwLX2z9XbqzYzdeHI5LJxULVLnonAcQp4NRfLQzyrGyFCAtYAdwRYRSSewoY/BJsPXe39BRIQh8mki/6P6F/SFCQMCT4Aq1hEnMwuPVHHCSbVr6Hewtc86FIAUkABQKc2tNIMt9cZG/eB4Pa12X8xXHcdi1Wl00OdrQy42TW/8FsLWABIXM9k3sX1iYpLMiLamsq5wpoOVMo4mNKuRTYwDgfFS9q2Z/ssYzumIt9YgCcITqUEwxdVpLkU9ttUgjYcffuVunCzMydZzdid0cUr1re6MGUzjxcQPddHwqPfb8joOCw77fkdNct06MzPSBZutsFob9SfAps/CySk7TR5ftAhxUEdUaN7DbMTmBzSvRCxeaWrHqde7ICY4X1ZNGtluoigC6Pzgkdoj1mmlcuNDaOYKjHVD2ZGGHaOfc0YEk7AVUxFaTg1Df6f+9CaFLLJNmipVGV7UwNAgPYMMpzOCq4alOFk+ZJiaqlFvoehrMy61rdzQPALoDliQ1AGFtbWtr1AR/GfVeecRg4YiaXVnT0nKVCLXQZqXdghUlfmSxvzEtnNK7CuwQec0WQuVDwq4YYpmXXUjy66kW0Vp396lhGxNCFjWanU4s8/ScSu14JC2Gv1bMLisr17dEXTlsGYce6X7LdtLHjC+zHmMPZZ+Njqmdn+F6l6c4X5owKoHV8xL3d6VIZOXJahNCGNinuOtCayxFW1BhmjXYTup5jcdEtnvWxz4wZSOO4uwHfn5q9gV3mc1+Kav9CMVzZ2MLTOEFIAUkACBTnmtNQUreXEHtUmOEY/Safut8VzPHqLlKNuaMXHNU66m+gk1xUGRyzyXMKDgylKqqy2BQs4ORceGSJza5ENLDpvRtj1VpA+amRab3JqkJRj4Srt4wgnFWqRk4y7tdlLbMArlPcqU1qanotpft38Wj1Psul4WtJM63g0e7Jm8ctY2iq1gpX7PWbvpP8AG6SEj2FjueV9KU4eRxKqwNW2hCu7lJcbk1umKa6MwkaHRai9UPdZJGOUYcky1iwpZnoxzriJM4nCdvduTcq2JJS5mj6NaF+3UR9cHwITrd5FSu7U2enQVbMgcakFMVrFRi0VOIDvED4FcRxqOTFvzs/kdHgJ3oR9CDMDisjctbsTfPFLZDsqDD0lhLCOsTso/KNVU6I+JvNW6cWanyJ8Su54THLhIfF/M5fiEs2IkWJWiUjm/THZ5pUn7iR6fiqmMXdudJ+G52rSj1RyZxWYjuJOzAUgr2DaEMWKFF2SRIe52sKCQctdDpfQ1R/eH/Zb4SfdaeBjo2cT+Kql5wivM6eFfOSDQApIKBAhhteaQFppPP8AxO27Wvb4/PKwOOp5YW8/oY/FVbLJ+ZFp2mm2BhPvz2lcj2c5XKlOvRVktxbazRshNcGTKUE7oW63tAEkR58MPFNVGTegSxUEu81+pT6QqtdiDyV2lCUdGYGOcZzzRKO2OV2mitT3N90bUIsznfSf6D8V0/DF/Sv5nZcKjahfqaty0TTI1dsgjeCPHBAHlbWOjdrPG5xHmqcXqzYitEUzgpURSQUpRrelgggRDjAmsmgjoPQ5Qm3sO7H39kyPjExWlM9EsVsyh0JBTK61Q2sCdrB5Erj/AMQQftEWun6s3eGXlSsuTM7eJxKxbW2NayWiCKUUCAFBIIwqiIixOiaIZFCmPqDzErvuHq2Fp/8AVHJYp3rSfmSirhAYbpbp/qbXbqg9J9lWxX9u5ufh6zxii+af0OLuYslM7+VNJiiE0la0CASiJXQcIuGV8gBm9GboCpvmdb6HKMWaq76VT0BWthFaBwH4klfEpeR0IK2c8GgAkgoEAYnpFwfZ3bxUb50nejSsfjUb0ovz/RmNxrSkpGcNpBbDm94OHh+K5VQad0zmHXhKNpLXy29CM+q8fNfhxxUuWL3Qz2mUdLjRBOJKddLYhlO7uKKTmNu2yDa3KeCLFNHTdQ2xY2cST6LqOHq1BHa8OjbDxL9xV0vEd7kAeZNdqV21VhuqO8iqa8TNenrFGacpUNkITiIASCodphNZPTR1DoTpfrRO5p9HJlPxkeM8B3VlRWzLHmvQBl9dB2qZ+qfI/iuX/EC78H5M3eDvuyXmZwFc8a4ECgQApqRjWB6ECOj2TCmwfVb6BeiYZWowXkvochWd6kn5scLlMRmT6TG3rA/g5p9R7qDEq9NmvwKVsdA4c4rGR6RJ62DJSD20GCkFTQClQNvkKSDzsfRZTiwtO97z5rawy/po81/EMr41+5GxCsGGGgBaAAgDFdJ2DLO7dVcP6mH4LM4sr0fiY/G1fD/ExwfvXLtHHPYF9FhthN9FhbALkJAkQLSVYgWaZ1rU9sWOj9nzkrqsGrUYncYOOWhFeRbuCslkj1AgDzf0iM/Xaw+u77xVN6TZrUdYIx7lKgkISkQYQKh+iEyRZpnWOhJn6aofqH2+KbR8RWxr7qOzsCtmaPtCAM5ro39kftf2rmvxAv7b9/6G1wd+Je79TMLmzbCSigCAFhNGsN2YQJyOlUx2RyHovR6atFLyOOl4mAp40zmv7ZsFfkPUKKuu4zR4TLLjKb8zgzliHptgSgdcMJBUxQSD0GgV7Ha+jYfqFLm4+a3MP/bR5hxx3xszVKYyQIAWgAIAxnShRe6z0yxsltUOMbg10nBU8dTc6VkUOI0nUo2RgLK59QSxhdvugmD3BctUUYO0nb3nI+y1JO0Yt/AlCxVjlSf3td8FE6tJf5L1QPCVl/hL0Yltirkx1T5+y7lnCV1aSV8y9UOWDqvaD9P0F1tG12iTSfHIpsa1KTspIPYqy1cH6FdRsdaubtNjjvdBujm7JatDCTk9i5hcDUqNaaHZNXbMadmpMJkhuJ7yV0dOOWKR1lOOWKRYEJ48Ze1AHA+kfV+1fKqla4XUXucWva1zoN50hxA7PfCq1I2d0i/h6ySyyZiX6AtOYo1CM5DHERvmIhQrGUNnJX96LTpSeqGxoK0kkCjUMbQ0kdzhge5OeLoreS9Rvs9R7IUNAWqf3er/AEOPsk9sofnXqhyw1ToOs0PXYRfpVGzgLzHCTuEjFIsRTqaQafudxbOC72h17oh0LaKL3VKrLjXMIaHAtccjJaRIGG1WKMGtWjPxFXO7I6qwKwVR0BAGd1xs1R4p9W28RekYSRhlKyeLYOeIhHJujR4diI0ZPNzMw2zVNrHN33gR6rk62Hq0fHFr4G9HEUpbSHWWF52eY+KqOtFCvEQXMX/ptTd5hN7eA32mn1EmwvGwHkQfKVJCWd2im37mHtFPqIo2Ou9wDaTokS5wutA3y6J7pWph+F16r1jZeehFWxtGC8V35HSGjAcgu2Wxy73AUohU602I1rLVpggFzYBOUyE2aurE2Hq9lVjPocEtug7TQN2rRqDc+6Sxw2FrxgVkToSi9j0TCcToYhJKav52X6kC6dxTHBrdGgszHG0H7lE5RQZmhz5M+8G3TJ2bUJpq6F7VLW4BZqjndWxjnPyutBc7wCkhTcnsR4jGQpU80pJLzO7aj6PfQsdKnUEPaDI3SZhbVNWjY80x9ZVsRKcdmaCE8phIAOUACUAU+stWq1jH0WNe9jwbjnXLwILSA4gicRhtSMbIj6OrVagl9jo03HEg1YfPEdXIKhqUadZWqQT96TESb1aLL5HlNE8btV0DhmJVSXCcFLelH0Fs/P1YDYWjKk8/90+70R4TgltSXoFvf6v7jNZr2/Msn81+mPPNWaeFoU3eFNL3JCfAyGsOsVob2KVma7a57Khe1g+sQwNb3lTOXRDJza0NnoA/q1HGZptM/aE+6dHYkjsTylHCHIAyFm005lZ1B9CoTfqFjmAw4dY+RLgGyBd2/wASbewaltUszXwXWZ+/tMpk4fZcVHOjTqeOKfvQ6M5R2bQ2dG0iSOrqiI+m3E7AL0nuEKD2HC/8cf8A5RIsRVX+T9Q26NaMrPVdwJB+/UhCwOF/44//AChHiKr/AMmC0VTSEssrjvgBl0bZkc8Gz3KzCEYK0VZeRHJt6sqdUtPOttoLm0H06TGuAe4yHukDDDZinXuFjaBOEFhAFJrLaKtN9nNMAgvc116bsFhIvFoJaMM4wTJO1h8VdMsWdZDTcYcMbtQkA8CWCRxwThgp1KfnUp/oPqVFKnB7xXyHqUlswdQ0DCk2dgN0T4AhHZwtpFfIXPJ82KJeBhTGyBejxwwhPStshjKnTtprMDbraYJOMuc52GxrA3HnIhJJtIdBXZfNyCeMAlAq9Zg42WtcMOuEtMxiMc0j2H013lczeqOnLS+gwVLI7AXQRUphzg3C8WVHNOMZiQU2L0HVYJPRr5/YtK9kp1MauinOO8iyuPj1kyhpdCWjiq9PSFRx+LCdq1ZP/wA8nl1YnxqBI4R6FhcTxn/K/UVV0RQpEXdGmphm3qCBwPW1G4+I4pcqXIilj8VLeo/Vjj7Y9jSGWM0yBg1zqQ8G0XPPknFVuUneTv6knV19Q0GuqxfcXEwQQAXGBIwwEIQTST0LOUowCAESkEAgCh1tqMFOmKjrrTUxOUG66FHUtbUjqWtqVlCvUYOxXc5uzGR3Ai7Hco9VsxiTWzJ9LTNUDYeYb7AJc8h2aXUcGm625kcvaUZ5hmkQ9IaSrOHzmt/lYfVpRml1BuT5lLanlw/SPL+BJI7gcAj3sRRNpoA/q1L7MeBIUsXoTR2J6cKFCAMnY7K8VKzmvIv1HH6TZD3t+Y7CQA3H4JtwLAV7S3IU3d7h5AgeSS7HaD3+pWmZ+Thx5gehKTM+gtkLZb7SRAohv9J/uCVSfQLIg6RdaCO0WN5CSO55cEmZi2iRNXmOFqkvc69TcDeJOAggAZNGeAAzQnqLJKxrgpLkYoIuFio08JfRF4jFxkGMgNoUVRJtEtNtJiW1K4+ZUaeDh7jE+KR5+THdzmhwW+1DOmx3LD1ckzVPL9/EXJSfX9/AP5faD/sDx/FNbm+QuSn1DdWtTtlNnn7lOvVfNITLSXVlTpSk8gipVJ4N7I7wMD4Jjg34nckhJLwo1VM4DkPRWUyq1qHKW4liv0+f1d/d6hNlsSUl30UVgpfomEVDTJaCWg9mT9WYTFtuWJPXVXJVKrXGVdh5hg/tS3l1G2p/l+o6y22j6dM97fijNITJT6Mc6yucDUa3gWtn0KW7EtBciLbbNLT1ld7htaCQ3wyR7xVL8qLDQF3qRc+aCQE5Mhqp5tSxlOIwpQASQaBIBmteGzTpA/8AJ/a5VMan2WhWxS7hlaNN1P8AZuLRuGXgcFiKvVjopGT21WOzHxb64/iaebG+yesbWXP6fYVY2uugr/VK/wBT+j8U726r1+n2HLHVeiEVbdWcINzub8UvttW/8D1jKr6FTUs5LpcSTO1SKtUluyWNWctzp2rn7tS+z7lbFHwI04eFFlCkHAhAHJdI6br0LRVDHAtFR/ZPFxOBCrObTLCppomUNeD/AB0nz9V0+sJc7E7NEpmvdP6NbxafdGd9BezDOvjNja3/AI/FGd9A7PzIGkddHPEU6R5vI8wM/FJnY9Uiw1At1SraXF8YMdAAjMhOptuQlWKUToSsFYMJAuZfXmYpQSIvZfyrO4jVnTUXA0MDCM8ykUNm0rUbmJ5EtPus+PEqq3j8y7LAxezJlPTg2tqdzp+ClXFHzg/gyN4B8mvQWNNU/o1J2YjDzS/6pH8j+QewT6oTU06IwpuPN3+Ux8V6Q+Y5cPfOXyKmvaKlR2JgTkPclQ/6hVqSslZE6wsILqdOo/NbyHoujjsjAluxaUaVOtf7rU/l+8Eyr4WWcIk60bnNrPaqtM9l7uR7Q81RU5I6KWEoy3RYU9PVx9A82n2Kf20hv+m0X1HBrDX3U/6T8UdtIVcLoefqJqaetJ/jA+y0e6O2mSR4Zh1yIlqtFWr+0e53DIeAwSZ5PdkiwdCC7sTd6nCLK0fWd6q5S8JzGP8A7zsXalKYSAEpBAIAzeueVEfXcfBv4qtivAV8R4Sk6tYTiZUohdUm5SJwB1SMoZQnUk6MR6iQqtNWqcS1TRvNWnTZqfCR5lbFHwI0oeEtVIPAgDjul6d6tUO97vUqs1qWk9CF8nRYLhfJktguD5MiwqYoWdJYcmaro+ZFoP2HeydTVmR1XodEU5XDQBmtchPVjg72WdxBXSNHAO1zM9UsrszUzAFJHZi5gdUjsxcwoUU10xc4fVJ0Keo2ctDotmPYb9kegXSQ8KObn4mOJw0qdaf3Z/Et9Uyp4SxhP7qOe9UqVjpozFikksSqYoUklh6noH1SWw7OGKSLDXLQ2uqJ/V43Pd7K9S8JymO/vMulIVAigCK23UjlVpnk9vxSCDzKgORB5EFAGe1sxfRG4PPjcCq4vwFfEbFVksnLcouIC4I7Njcgm+EvZMR02KLZCRRsxFEhVmqzBE8DX6qO/QRucR6H3WnS8JoU/CXKkHhEoA5HXEucd5JUNiwIDEtgD6tFgD6tFguDq0lh1y91LwtI4hw8inRWoyo9DoSkIABAGa1qxe0bm+pPwVDGbo0MFsyjuKllNDMHcRlDMAMRlFzCgxJlDMBzUsY6jZS0Nxo8zSZ9kei2qfhRh1PGx9PGFNrWf0Eb3D3KZU2LOE/uIxVxVbG5mHAxNsTKQoMRYkUgXUlhcwdxArehp9UHfo3jc6fEfgrlPY5vHf3C9UhSCKAP/9k=',
                    }}
                    style={[styles.scrollImg]}>
                    <LinearGradient
                      colors={['rgba(255, 255, 255, 0)', '#000000']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 0.85 }}
                      locations={[0.6, 1]}
                      style={styles.gradient}>
                      <View>
                        <Text style={{ color: 'white' }}>Beverages</Text>
                      </View>
                    </LinearGradient>
                  </ImageBackground>
                </View>
              </ScrollView>
            </View>
          </View>
          <View style={styles.mainCenter2}>
            <View style={styles.mainCenter2H}>
              <View style={styles.mainCenter2Hleft}>
                <Text style={{ fontSize: 17, fontWeight: '600', color: '#484646' }}>
                  Collections
                </Text>
              </View>
              <View style={styles.mainCenter2HleftLine}></View>
            </View>
            <View style={styles.mainCenter2Card1}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.mainCenter2Card1Box}>
                  <View style={{ height: 120, justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                      <View style={{ borderRadius: 50, borderColor: 'red', borderWidth: 1.5, height: 60, width: 60, backgroundColor: 'white' }}>
                        <Image
                          style={[styles.CollectionsImage, { height: 50, width: 55, marginLeft: 2 }]}
                          source={require('../assets/CollectionImages/beverages.png')}
                        />
                      </View>
                      <Text style={{ fontFamily: 'Montserrat-VariableFont_wght', fontWeight: '600', color: '#484646' }}>Beverages</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ height: 120, justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                      <View style={{ borderRadius: 50, borderColor: 'red', borderWidth: 1.5, height: 60, width: 60, backgroundColor: 'white' }}>
                        <Image
                          style={[styles.CollectionsImage, { height: 55, width: 50, marginLeft: 4 }]}
                          source={require('../assets/CollectionImages/Chai-coffee.png')}
                        />
                      </View>
                      <Text style={{ fontFamily: 'Montserrat-VariableFont_wght', fontWeight: '600', color: '#484646', textAlign: 'center' }}>Coffee and chai</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.mainCenter2Card1Box}>
                  <View style={{ height: 120, justifyContent: 'space-between' }}>
                    <TouchableOpacity>
                      <View style={{ borderRadius: 50, borderColor: 'red', borderWidth: 1.5, height: 60, width: 60, backgroundColor: 'white' }}>
                        <Image
                          style={[styles.CollectionsImage, { height: 55, width: 45, marginLeft: 5 }]}
                          source={require('../assets/CollectionImages/Snacks.png')}
                        />
                      </View>
                      <Text style={{ fontFamily: 'Montserrat-VariableFont_wght', fontWeight: '600', color: '#484646', textAlign: 'center' }}>Snacks</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ height: 120, justifyContent: 'space-between' }}>
                    <TouchableOpacity>
                      <View style={{ borderRadius: 50, borderColor: 'red', borderWidth: 1.5, height: 60, width: 60, backgroundColor: 'white' }}>
                        <Image
                          style={[styles.CollectionsImage, { height: 50, width: 44, marginLeft: 7 }]}
                          source={require('../assets/CollectionImages/Maggi.png')}
                        />
                      </View>
                      <Text style={{ fontFamily: 'Montserrat-VariableFont_wght', fontWeight: '600', color: '#484646', textAlign: 'center' }}>Maggi</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.mainCenter2Card1Box}>
                  <View style={{ height: 120, justifyContent: 'space-between' }}>
                    <TouchableOpacity>
                      <View style={{ borderRadius: 50, borderColor: 'red', borderWidth: 1.5, height: 60, width: 60, backgroundColor: 'white' }}>
                        <Image
                          style={[styles.CollectionsImage, { height: 70, width: 70 }]}
                          source={require('../assets/CollectionImages/Breakfast.png')}
                        />
                      </View>
                      <Text style={{ fontFamily: 'Montserrat-VariableFont_wght', fontWeight: '600', color: '#484646' }}>Breakfast</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ height: 120, justifyContent: 'space-between' }}>
                    <TouchableOpacity>
                      <View style={{ borderRadius: 50, borderColor: 'red', borderWidth: 1.5, height: 60, width: 60, backgroundColor: 'white' }}>
                        <Image
                          style={[styles.CollectionsImage, { height: 40, width: 60, marginTop: 3 }]}
                          source={require('../assets/CollectionImages/Sandwich.png')}
                        />
                      </View>
                      <Text style={{ fontFamily: 'Montserrat-VariableFont_wght', fontWeight: '600', color: '#484646' }}>Sandwich</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.mainCenter2Card1Box}>
                  <View style={{ height: 120, justifyContent: 'space-between' }}>
                    <TouchableOpacity>
                      <View style={{ borderRadius: 50, borderColor: 'red', borderWidth: 1.5, height: 60, width: 60, backgroundColor: 'white' }}>
                        <Image
                          style={[styles.CollectionsImage, { height: 60, width: 55, marginLeft: 0.5, marginTop: 2 }]}
                          source={require('../assets/CollectionImages/Cakes.png')}
                        />
                      </View>
                      <Text style={{ fontFamily: 'Montserrat-VariableFont_wght', fontWeight: '600', color: '#484646', textAlign: 'center' }}>Cakes & Desserts</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ height: 120, justifyContent: 'space-between' }}>
                    <TouchableOpacity>
                      <View style={{ borderRadius: 50, borderColor: 'red', borderWidth: 1.5, height: 60, width: 60, backgroundColor: 'white' }}>
                        <Image
                          style={[styles.CollectionsImage, { height: 60, width: 45, marginTop: -2, marginLeft: 5 }]}
                          source={require('../assets/CollectionImages/NorthIndian.jpeg')}
                        />
                      </View>
                      <Text style={{ fontFamily: 'Montserrat-VariableFont_wght', fontWeight: '600', color: '#484646', textAlign: 'center' }}>North Indian</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.mainCenter2Card1Box}>
                  <View style={{ height: 120, justifyContent: 'space-between' }}>
                    <TouchableOpacity>
                      <View style={{ borderRadius: 50, borderColor: 'red', borderWidth: 1.5, height: 60, width: 60, backgroundColor: 'white' }}>
                        <Image
                          style={[styles.CollectionsImage, { height: 50, width: 50, marginLeft: 5, marginTop: 5 }]}
                          source={require('../assets/CollectionImages/IceCream.png')}
                        />
                      </View>
                      <Text style={{ fontFamily: 'Montserrat-VariableFont_wght', fontWeight: '600', color: '#484646', textAlign: 'center' }}>Ice Cream</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ height: 120, justifyContent: 'space-between' }}>
                    <TouchableOpacity>
                      <View style={{ borderRadius: 50, borderColor: 'red', borderWidth: 1.5, height: 60, width: 60, backgroundColor: 'white' }}>
                        <Image
                          style={styles.CollectionsImage}
                          source={require('../assets/CollectionImages/Pizza.png')}
                        />
                      </View>
                      <Text style={{ fontFamily: 'Montserrat-VariableFont_wght', fontWeight: '600', color: '#484646', textAlign: 'center' }}>Pizza & Burgers</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.TrendingOutlet}>
                  <View style={{ height: 120, justifyContent: 'space-between' }}>
                    <TouchableOpacity>
                      <View style={{ borderRadius: 50, borderColor: 'red', borderWidth: 1.5, height: 60, width: 60, backgroundColor: 'white' }}>
                        <Image
                          style={[styles.CollectionsImage, { height: 60, width: 80, marginLeft: -10 }]}
                          source={require('../assets/CollectionImages/Chinese.png')}
                        />
                      </View>
                      <Text style={{ fontFamily: 'Montserrat-VariableFont_wght', fontWeight: '600', color: '#484646', textAlign: 'center' }}>Chinese</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ height: 120, justifyContent: 'space-between' }}>
                    <TouchableOpacity>
                      <View style={{ borderRadius: 50, borderColor: 'red', borderWidth: 1.5, height: 60, width: 60, backgroundColor: 'white' }}>
                        <Image
                          style={[styles.CollectionsImage, { height: 60, width: 80, marginLeft: -10 }]}
                          source={require('../assets/CollectionImages/Salad.png')}
                        />
                      </View>
                      <Text style={{ fontFamily: 'Montserrat-VariableFont_wght', fontWeight: '600', color: '#484646', textAlign: 'center' }}>Salad</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
          <View style={[styles.mainCenter2,{height:230}]}>
            <View style={styles.mainCenter2H}>
              <View style={[styles.mainCenter2Hleft,{width: '40%'}]}>
                <Text style={{ fontSize: 17, fontWeight: '600', color: '#484646' }}>
                  Trending Outlet
                </Text>
              </View>
              <View style={styles.mainCenter2HleftLine}>
                
              </View>
            </View>
            <View style={styles.mainCenter2Card1}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.TrendingCards}>
                  <View style={styles.TrendingCardsTop}>
                    <ImageBackground
                    style={{ height:90,width:90,marginLeft:2,marginTop:1.5}}
                    source={require('../assets/CollectionImages/Venky.jpeg')} />
                  </View>
                  <View>
                    <Text style={{marginTop:10,fontWeight:'600'}}>Venky's</Text>
                  </View>
                </View>
                <View style={styles.TrendingCards}>
                <View style={styles.TrendingCardsTop}>
                    <ImageBackground
                    style={{ height:90,width:90,marginLeft:2,marginTop:1.5}}
                    source={require('../assets/CollectionImages/Dominos.png')} />
                  </View>
                  <View>
                    <Text style={{marginTop:10,fontWeight:'600'}}>Dominos</Text>
                  </View>
                </View>
                <View style={styles.TrendingCards}>
                <View style={styles.TrendingCardsTop}>
                    <ImageBackground
                    style={{ height:90,width:90,marginLeft:2,marginTop:1.5}}
                    source={require('../assets/CollectionImages/SipSap.jpeg')} />
                  </View>
                  <View>
                    <Text style={{marginTop:10,fontWeight:'600'}}>Sip Sap</Text>
                  </View>
                </View>
                <View style={styles.TrendingCards}>
                <View style={styles.TrendingCardsTop}>
                    <ImageBackground
                    style={{ height:90,width:90,marginLeft:2,marginTop:1.5}}
                    source={require('../assets/CollectionImages/SouthCircle.jpeg')} />
                  </View>
                  <View>
                    <Text style={{marginTop:10,fontWeight:'600'}}>South Circle</Text>
                  </View>
                </View>
                <View style={styles.TrendingCards}>
                <View style={styles.TrendingCardsTop}>
                    <ImageBackground
                    style={{ height:90,width:90,marginLeft:2,marginTop:1.5}}
                    source={require('../assets/CollectionImages/Wendy.jpeg')} />
                  </View>
                  <View>
                    <Text style={{marginTop:10,fontWeight:'600'}}>Wendy's</Text>
                  </View>
                </View>
                <View style={styles.TrendingCards}>
                <View style={styles.TrendingCardsTop}>
                    <ImageBackground
                    style={{ height:90,width:90,marginLeft:2,marginTop:1.5}}
                    source={require('../assets/CollectionImages/LosPollos.jpeg')} />
                  </View>
                  <View>
                    <Text style={{marginTop:10,fontWeight:'600'}}>Los Pollos</Text>
                  </View>
                </View>
                
                
              </ScrollView>
            </View>
          </View>
          <View style={[styles.mainCenter2, {height:2300}]}>
            <View style={styles.mainCenter2H}>
              <View style={[styles.mainCenter2Hleft,{width: '40%'}]}>
                <Text style={{ fontSize: 17, fontWeight: '600', color: '#484646' }}>
                  Explore All Outlets
                </Text>
              </View>
              <View style={styles.mainCenter2HleftLine}></View>
            </View>
            <View style={[styles.mainCenter2Card1,{height:2300}]}>
              <ScrollView>
                <View style={styles.ExploreCards}>
                  <View style={styles.ExploreCardsTop}>
                  <Image source={require('../assets/CollectionImages/BaskinRobinLogo.png')} style={{height:175,width:365,resizeMode:'contain'}} />
                  </View>
                  <View style={styles.ExploreCardsBottom}>
                    <View style={styles.ExploreCardsBottomLeft}>
                      <Image source={require('../assets/CollectionImages/BaskinRobinLogo.png')} style={{height:80,width:75,resizeMode:'contain'}} />
                    </View>
                    <View style={styles.ExploreCardsBottomRight}>
                      <View style={styles.ExploreCardsBottomRightTop}>
                        <Text style={{fontWeight:'700', color:'#2b2c2c',fontSize:17}}>Baskin Robbin</Text>
                      </View>
                      <View style={styles.ExploreCardsBottomRightBottom}>
                        <View style={styles.Ratings}>
                          <Icon name='star' size={16} color={'white'}/>
                          <Text style={{fontWeight:'400', color:'white',fontSize:13}}>3.9</Text>
                        </View>
                        <Icon name='trending-up' size={25} color={'black'}/>
                        <Text style={{fontWeight:'500',fontSize:15}}>19774 people ordered from here</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.Footer}>
                    <TouchableOpacity style={styles.FooterButton}>
                      <Text style={{fontSize:12,fontWeight:'700', color:'red'}}>Ice Cream</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.FooterButton}>
                      <Text style={{fontSize:12,fontWeight:'700', color:'red'}}>Cakes & Desserts</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.ExploreCards}>
                  <View style={styles.ExploreCardsTop}>
                  <Image source={require('../assets/CollectionImages/ChaiNagri.jpeg')} style={{height:185,width:368,marginLeft:2,marginTop:3,resizeMode:'contain'}} />
                  </View>
                  <View style={styles.ExploreCardsBottom}>
                    <View style={styles.ExploreCardsBottomLeft}>
                      <Image source={require('../assets/CollectionImages/ChaiNagri.jpeg')} style={{height:75,width:80,resizeMode:'contain'}} />
                    </View>
                    <View style={styles.ExploreCardsBottomRight}>
                      <View style={styles.ExploreCardsBottomRightTop}>
                        <Text style={{fontWeight:'700', color:'#2b2c2c',fontSize:17}}>Chai Nagri</Text>
                      </View>
                      <View style={styles.ExploreCardsBottomRightBottom}>
                        <View style={styles.Ratings}>
                          <Icon name='star' size={16} color={'white'}/>
                          <Text style={{fontWeight:'400', color:'white',fontSize:13}}>4.3</Text>
                        </View>
                        <Icon name='trending-up' size={25} color={'black'}/>
                        <Text style={{fontWeight:'500',fontSize:15}}>19774 people ordered from here</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.Footer}>
                    <TouchableOpacity style={styles.FooterButton}>
                      <Text style={{fontSize:12,fontWeight:'700', color:'red'}}>Beverages</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.FooterButton}>
                      <Text style={{fontSize:12,fontWeight:'700', color:'red'}}>Chai & Coffee</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.ExploreCards}>
                  <View style={styles.ExploreCardsTop}>
                  <Image source={require('../assets/CollectionImages/Dominos.png')} style={{height:175,width:365,resizeMode:'contain'}} />
                  </View>
                  <View style={styles.ExploreCardsBottom}>
                    <View style={styles.ExploreCardsBottomLeft}>
                      <Image source={require('../assets/CollectionImages/Dominos.png')} style={{height:80,width:75,resizeMode:'contain'}} />
                    </View>
                    <View style={styles.ExploreCardsBottomRight}>
                      <View style={styles.ExploreCardsBottomRightTop}>
                        <Text style={{fontWeight:'700', color:'#2b2c2c',fontSize:17}}>Domino's Pizza</Text>
                      </View>
                      <View style={styles.ExploreCardsBottomRightBottom}>
                        <View style={styles.Ratings}>
                          <Icon name='star' size={16} color={'white'}/>
                          <Text style={{fontWeight:'400', color:'white',fontSize:13}}>4.0</Text>
                        </View>
                        <Icon name='trending-up' size={25} color={'black'}/>
                        <Text style={{fontWeight:'500',fontSize:15}}>19774 people ordered from here</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.Footer}>
                    <TouchableOpacity style={styles.FooterButton}>
                      <Text style={{fontSize:12,fontWeight:'700', color:'red'}}>Beverages</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.FooterButton}>
                      <Text style={{fontSize:12,fontWeight:'700', color:'red'}}>Pizza's</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.ExploreCards}>
                  <View style={styles.ExploreCardsTop}>
                  <Image source={require('../assets/CollectionImages/Lapinoz.png')} style={{height:175,width:365,resizeMode:'contain'}} />
                  </View>
                  <View style={styles.ExploreCardsBottom}>
                    <View style={styles.ExploreCardsBottomLeft}>
                      <Image source={require('../assets/CollectionImages/Lapinoz.png')} style={{height:80,width:75,resizeMode:'contain'}} />
                    </View>
                    <View style={styles.ExploreCardsBottomRight}>
                      <View style={styles.ExploreCardsBottomRightTop}>
                        <Text style={{fontWeight:'700', color:'#2b2c2c',fontSize:17}}>La Pino'z Pizza</Text>
                      </View>
                      <View style={styles.ExploreCardsBottomRightBottom}>
                        <View style={styles.Ratings}>
                          <Icon name='star' size={16} color={'white'}/>
                          <Text style={{fontWeight:'400', color:'white',fontSize:13}}>4.2</Text>
                        </View>
                        <Icon name='trending-up' size={25} color={'black'}/>
                        <Text style={{fontWeight:'500',fontSize:15}}>19774 people ordered from here</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.Footer}>
                    <TouchableOpacity style={styles.FooterButton}>
                      <Text style={{fontSize:12,fontWeight:'700', color:'red'}}>Beverages</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.FooterButton}>
                      <Text style={{fontSize:12,fontWeight:'700', color:'red'}}>Pizza & Burgers</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.ExploreCards}>
                  <View style={styles.ExploreCardsTop}>
                  <Image source={require('../assets/CollectionImages/SipSap.jpeg')} style={{height:175,width:365,resizeMode:'contain'}} />
                  </View>
                  <View style={styles.ExploreCardsBottom}>
                    <View style={styles.ExploreCardsBottomLeft}>
                      <Image source={require('../assets/CollectionImages/SipSap.jpeg')} style={{height:80,width:75,resizeMode:'contain'}} />
                    </View>
                    <View style={styles.ExploreCardsBottomRight}>
                      <View style={styles.ExploreCardsBottomRightTop}>
                        <Text style={{fontWeight:'700', color:'#2b2c2c',fontSize:17}}>Sip Sap</Text>
                      </View>
                      <View style={styles.ExploreCardsBottomRightBottom}>
                        <View style={styles.Ratings}>
                          <Icon name='star' size={16} color={'white'}/>
                          <Text style={{fontWeight:'400', color:'white',fontSize:13}}>3.9</Text>
                        </View>
                        <Icon name='trending-up' size={25} color={'black'}/>
                        <Text style={{fontWeight:'500',fontSize:15}}>19774 people ordered from here</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.Footer}>
                    <TouchableOpacity style={styles.FooterButton}>
                      <Text style={{fontSize:12,fontWeight:'700', color:'red'}}>Cold Drinks</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.FooterButton}>
                      <Text style={{fontSize:12,fontWeight:'700', color:'red'}}>Cakes & Desserts</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.ExploreCards}>
                  <View style={styles.ExploreCardsTop}>
                  <Image source={require('../assets/CollectionImages/BaskinRobinLogo.png')} style={{height:175,width:365,resizeMode:'contain'}} />
                  </View>
                  <View style={styles.ExploreCardsBottom}>
                    <View style={styles.ExploreCardsBottomLeft}>
                      <Image source={require('../assets/CollectionImages/BaskinRobinLogo.png')} style={{height:80,width:75,resizeMode:'contain'}} />
                    </View>
                    <View style={styles.ExploreCardsBottomRight}>
                      <View style={styles.ExploreCardsBottomRightTop}>
                        <Text style={{fontWeight:'700', color:'#2b2c2c',fontSize:17}}>Baskin Robbin</Text>
                      </View>
                      <View style={styles.ExploreCardsBottomRightBottom}>
                        <View style={styles.Ratings}>
                          <Icon name='star' size={16} color={'white'}/>
                          <Text style={{fontWeight:'400', color:'white',fontSize:13}}>3.9</Text>
                        </View>
                        <Icon name='trending-up' size={25} color={'black'}/>
                        <Text style={{fontWeight:'500',fontSize:15}}>19774 people ordered from here</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.Footer}>
                    <TouchableOpacity style={styles.FooterButton}>
                      <Text style={{fontSize:12,fontWeight:'700', color:'red'}}>Ice Cream</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.FooterButton}>
                      <Text style={{fontSize:12,fontWeight:'700', color:'red'}}>Cakes & Desserts</Text>
                    </TouchableOpacity>
                  </View>
                </View>
          
              </ScrollView>
            </View>
          </View>
          <View style={styles.MainFooter}>
            <View style={{}}>
              <Text style={{fontWeight:'600',fontStyle:'italic',fontSize:20,color:'darkgrey',textAlign:'center'}}>First we eat, then we do everythingelse. - M.K.Fisher </Text>
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
              <Image
              source={require('../assets/CollectionImages/LineLogo.png')}  style={{height:30}}/>
            </View>
            <View style={{justifyContent:'center',alignItems:'center',marginTop:30}}>
              <Text style={{color:'darkgrey',fontSize:16}}>Powered by</Text>
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:20,fontWeight:'600'}}>9191 Hospitality</Text>
              </View>
          </View>
          
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View>
          <TouchableOpacity style={styles.footerCont}>
            <Icon name="storefront" size={30} color={'#8e8e8e'} />
            <Text style={{ color: '#8e8e8e' }}>Outlets</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.footerCont}>
            <Icon name="military-tech" size={30} color={'#8e8e8e'} />
            <Text style={{ color: '#8e8e8e' }}>Orders</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.footerCont}>
            <Icon name="account-balance-wallet" size={30} color={'#8e8e8e'} />
            <Text style={{ color: '#8e8e8e' }}>uMoney</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.footerCont}>
            <Icon name="account-circle" size={30} color={'#8e8e8e'} />
            <Text style={{ color: '#8e8e8e' }}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  gradient: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 90,
  },
  HeaderLeft: {
    flexDirection: 'column',
  },
  HeaderRight: {
    justifyContent: 'center',
    marginLeft: 60,
  },
  Header: {
    backgroundColor: 'transparent',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  HeaderTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    paddingLeft: 10,
  },
  HLTxt: {
    fontSize: 18,
    fontFamily: 'Rubik-Italic-VariableFont_wght',
    color: '#fff',
    paddingLeft: 10,
    fontWeight: '600',
    alignItems: 'flex-start',
  },
  HButton: {
    borderWidth: 1.2,
    borderColor: '#fff',
    borderRadius: 80,
    height: 38,
    width: 110,
    paddingBlock: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainCont: {
    padding: 10,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 5,
    shadowRadius: 3.84,
    elevation: 2,
    backgroundColor: '#eeeeee',
    marginTop: 10,
    flex:1,
  },
  textInput: {
    fontSize: 14,
    fontFamily: 'Rubik-Italic-VariableFont_wght',
    color: 'grey',
    borderWidth: 1,
    borderRadius: 50,
    height: 45,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    marginHorizontal: 15,
    borderColor: 'white',
    elevation: 10,
    marginBottom: 10
  },
  mainHeader: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 10,
    marginTop: 5,
  },
  mainHeaderLeft: {
    height: 85,
    width: '47%',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 19,
    flexDirection: 'row',
  },
  mainHeaderRight: {
    height: 85,
    width: '47%',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 19,
    flexDirection: 'row',
  },
  mainHeaderLeftL: {
    padding: 10,
  },
  mainHeaderTxt1: {
    fontWeight: '700',
    fontSize: 18,
  },
  mainHeaderTxt2: {
    fontWeight: '800',
    fontSize: 12,
    fontFamily: 'Rubik-Italic-VariableFont_wght',
    color: '#8e8e8e',
  },
  mainHeaderR: {
    paddingLeft: 13,
    justifyContent: 'center',
  },
  mainCenter: {
    height: 280,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
    borderColor: 'green',
    borderWidth: 1.5,
  },
  mainCenterTop: {
    flexDirection: 'row',
  },
  mainCenterL: {
    width: '50%',
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 130,
    padding: 10,
  },
  mainCenterR: {
    width: '50%',
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainCenterOpacity: {
    backgroundColor: 'lightgreen',
    borderColor: 'green',
    borderWidth: 1,
    padding: 3,
    borderRadius: 12,
    width: '90%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  mainCenterOpacity2: {
    backgroundColor: 'red',
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
    width: '80%',
  },
  scrollView: {
    width: '100%',
  },
  mainCenterBottom: {
    height: 120,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  scrollImg: {
    height: 90,
    width: 90,
    marginRight: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footerCont: {
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 15,
    width: '93%',
    padding: 10,
    margin: 15,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 10,
  },
  mainCenter2: {
    height: 305,
  },
  mainCenter2H: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 20,
  },
  mainCenter2Hleft: {
    height: 30,
    width: '30%',
    paddingLeft: 10,
  },
  mainCenter2HleftLine: {
    borderWidth: 1,
    borderRadius: 40,
    backgroundColor: '#656565',
    height: 0.1,
    width: '68%',
    borderColor: '#656565',
    marginTop: 12,
  },
  mainCenter2Card1: {
    width: '100%',
    height: 280,
    padding: 10,
    marginTop:40
  },
  mainCenter2Card1Box: {
    height: 240,
    width: 92,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  CollectionsImage: {
    height: 65,
    width: 65,
    borderColor: 'red',
    backgroundColor: 'transparent',
    padding: 2,
    zIndex: 1,
    resizeMode: 'contain',
    marginLeft: -4,
  },
  TrendingOutlet: {
    height: 60,
    width: '50%',
    padding: 10,
    backgroundColor: 'red',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TrendingCards: {
    flexDirection: 'column',
    padding: 5,
    width: 110,
    height: 145,
    marginRight: 20,
    borderWidth: 0.7,
    borderColor: 'grey',
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderRadius:10,
    alignItems: 'center',
    elevation:15,
    backgroundColor:'white',
  },
  TrendingCardsTop: {
    width: 95,
    height: 100,
    borderWidth: 1,
    borderRadius:8,
    borderColor: 'grey',
    flexDirection:'row',
  },
  ExploreCards: {
    height: 345,
    borderRadius:10,
    borderWidth:0.5,
    borderColor:'grey',
    marginBottom:25,
    backgroundColor:'white',
  },
  ExploreCardsTop:{
    height:190,
    borderBottomWidth:1,
    borderColor:'grey',
    backgroundColor:'white',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
  },
  ExploreCardsBottom: {
    padding:10,
    flexDirection:'row',
    backgroundColor:'white',
    borderRadius:10,
  },
  ExploreCardsBottomLeft: {
    width: '25%',
    height: 85,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 10,
    borderColor: 'green',
    borderWidth: 1,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    justifyContent:'space-between',
    alignItems: 'center',

  },
  ExploreCardsBottomRight: {
    width: '75%',
    height: 85,
    backgroundColor: 'white',
    paddingLeft:10,
    paddingRight:10,
  },
  ExploreCardsBottomRightTop: {
    height:40,
    justifyContent:'center',
    
  },
  ExploreCardsBottomRightBottom: {
    flexDirection: 'row',
    width: '75%',
    alignItems:'center'
  },
  Ratings: {
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center',
    borderRadius:6,
    width: 45,
    height:30,
    paddingHorizontal:4,
    backgroundColor: 'green'
  },
  Footer: {
    flexDirection:'row',
    height:30,
    paddingLeft:10,
  },
  FooterButton: {
    borderWidth:1.7,
    borderColor:'red',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
    padding:3,
    marginRight:20

  },
  MainFooter: {
    backgroundColor: 'transparent',
    height: 300,
    padding:10,
  }

});
