
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Fri, 26 Apr 2024 20:37:47 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
TokenColorBaseWhite,
TokenColorBaseRed,
TokenColorBaseGreen,
TokenColorBaseSuccess
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
