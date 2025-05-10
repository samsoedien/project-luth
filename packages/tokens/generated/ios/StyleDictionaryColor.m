
//
// StyleDictionaryColor.m
//

// Do not edit directly, this file was auto-generated.


#import ".h"

@implementation 

+ (UIColor *)color:()colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
#fff,
[object Object],
rgb(0,255,0),
rgb(0,255,0)
    ];
  });

  return colorArray;
}

@end