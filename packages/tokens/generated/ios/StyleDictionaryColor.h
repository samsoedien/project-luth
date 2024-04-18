
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Thu, 18 Apr 2024 10:53:02 GMT


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
